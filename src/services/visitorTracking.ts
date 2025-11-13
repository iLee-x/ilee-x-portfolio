export interface VisitorLocation {
  lat: number;
  lng: number;
  city?: string;
  country?: string;
  timestamp: number;
}

const STORAGE_KEY = 'portfolio_visitors';

export const visitorTrackingService = {
  // Get visitor's location using IP geolocation
  async getVisitorLocation(): Promise<VisitorLocation | null> {
    try {
      // Using ipapi.co for free IP geolocation
      const response = await fetch('https://ipapi.co/json/');
      if (!response.ok) {
        throw new Error('Failed to fetch location');
      }

      const data = await response.json();

      return {
        lat: data.latitude,
        lng: data.longitude,
        city: data.city,
        country: data.country_name,
        timestamp: Date.now()
      };
    } catch (error) {
      console.error('Error fetching visitor location:', error);
      return null;
    }
  },

  // Store visitor location in localStorage
  storeVisitorLocation(location: VisitorLocation): void {
    try {
      const existingData = this.getAllVisitors();
      existingData.push(location);

      // Keep only last 100 visitors to avoid storage issues
      const limitedData = existingData.slice(-100);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedData));
    } catch (error) {
      console.error('Error storing visitor location:', error);
    }
  },

  // Get all stored visitor locations
  getAllVisitors(): VisitorLocation[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error retrieving visitor data:', error);
      return [];
    }
  },

  // Track current visitor
  async trackCurrentVisitor(): Promise<void> {
    const location = await this.getVisitorLocation();
    if (location) {
      this.storeVisitorLocation(location);
    }
  },

  // Get aggregated visitor data for map visualization
  getAggregatedVisitors(): Array<{ lat: number; lng: number; count: number; city?: string; country?: string }> {
    const visitors = this.getAllVisitors();
    const aggregated = new Map<string, { lat: number; lng: number; count: number; city?: string; country?: string }>();

    visitors.forEach(visitor => {
      const key = `${visitor.lat.toFixed(2)},${visitor.lng.toFixed(2)}`;
      if (aggregated.has(key)) {
        aggregated.get(key)!.count++;
      } else {
        aggregated.set(key, {
          lat: visitor.lat,
          lng: visitor.lng,
          count: 1,
          city: visitor.city,
          country: visitor.country
        });
      }
    });

    return Array.from(aggregated.values());
  }
};

import axios from 'axios';
import mockJobsData from '../data/mockJobsData';


const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';

export const jobsAPI = {
  // Mock implementation - replace with actual API call
  getJobs: async () => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, return mock data
      // Later replace with: const response = await axios.get(`${API_BASE_URL}/jobs`);
      return {
        data: mockJobsData,
        status: 200
      };
    } catch (error) {
      throw new Error('Failed to fetch jobs data');
    }
  }
};
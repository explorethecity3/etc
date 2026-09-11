import { getAllCitiesWithData } from '@/lib/cityData'

// These are editorial travel-discovery tiers, not an official government ranking.
// We keep the directory on one page so an entry never becomes a thin city page.
const tierOne = [
  ['Ahmedabad', 'Gujarat'], ['Bangalore', 'Karnataka'], ['Chennai', 'Tamil Nadu'],
  ['Delhi', 'Delhi'], ['Hyderabad', 'Telangana'], ['Kolkata', 'West Bengal'],
  ['Mumbai', 'Maharashtra'], ['Pune', 'Maharashtra'],
]

const tierTwo = [
  ['Agra', 'Uttar Pradesh'], ['Ajmer', 'Rajasthan'], ['Aligarh', 'Uttar Pradesh'],
  ['Amritsar', 'Punjab'], ['Asansol', 'West Bengal'], ['Bareilly', 'Uttar Pradesh'],
  ['Belagavi', 'Karnataka'], ['Bhopal', 'Madhya Pradesh'], ['Bhubaneswar', 'Odisha'],
  ['Chandigarh', 'Chandigarh'], ['Coimbatore', 'Tamil Nadu'], ['Cuttack', 'Odisha'],
  ['Dehradun', 'Uttarakhand'], ['Dhanbad', 'Jharkhand'], ['Durg–Bhilai', 'Chhattisgarh'],
  ['Faridabad', 'Haryana'], ['Ghaziabad', 'Uttar Pradesh'], ['Goa', 'Goa'],
  ['Gorakhpur', 'Uttar Pradesh'], ['Guntur', 'Andhra Pradesh'], ['Guwahati', 'Assam'],
  ['Gwalior', 'Madhya Pradesh'], ['Hubballi–Dharwad', 'Karnataka'], ['Indore', 'Madhya Pradesh'],
  ['Jabalpur', 'Madhya Pradesh'], ['Jaipur', 'Rajasthan'], ['Jalandhar', 'Punjab'],
  ['Jammu', 'Jammu and Kashmir'], ['Jamshedpur', 'Jharkhand'], ['Jodhpur', 'Rajasthan'],
  ['Kanpur', 'Uttar Pradesh'], ['Kochi', 'Kerala'], ['Kolhapur', 'Maharashtra'],
  ['Kota', 'Rajasthan'], ['Kozhikode', 'Kerala'], ['Lucknow', 'Uttar Pradesh'],
  ['Ludhiana', 'Punjab'], ['Madurai', 'Tamil Nadu'], ['Mangaluru', 'Karnataka'],
  ['Meerut', 'Uttar Pradesh'], ['Mysuru', 'Karnataka'], ['Nagpur', 'Maharashtra'],
  ['Nashik', 'Maharashtra'], ['Noida', 'Uttar Pradesh'], ['Patna', 'Bihar'],
  ['Prayagraj', 'Uttar Pradesh'], ['Raipur', 'Chhattisgarh'], ['Rajkot', 'Gujarat'],
  ['Ranchi', 'Jharkhand'], ['Salem', 'Tamil Nadu'], ['Surat', 'Gujarat'],
  ['Thiruvananthapuram', 'Kerala'], ['Tiruchirappalli', 'Tamil Nadu'],
  ['Vadodara', 'Gujarat'], ['Varanasi', 'Uttar Pradesh'], ['Vijayawada', 'Andhra Pradesh'],
  ['Visakhapatnam', 'Andhra Pradesh'],
]

const tierThree = [
  ['Agartala', 'Tripura'], ['Akola', 'Maharashtra'], ['Alappuzha', 'Kerala'],
  ['Alwar', 'Rajasthan'], ['Ambala', 'Haryana'], ['Amravati', 'Maharashtra'],
  ['Anand', 'Gujarat'], ['Ayodhya', 'Uttar Pradesh'], ['Ballari', 'Karnataka'],
  ['Bardhaman', 'West Bengal'], ['Bathinda', 'Punjab'], ['Bharatpur', 'Rajasthan'],
  ['Bharuch', 'Gujarat'], ['Bhagalpur', 'Bihar'], ['Bhavnagar', 'Gujarat'],
  ['Bhilwara', 'Rajasthan'], ['Bikaner', 'Rajasthan'], ['Bilaspur', 'Chhattisgarh'],
  ['Bokaro', 'Jharkhand'], ['Darbhanga', 'Bihar'], ['Davangere', 'Karnataka'],
  ['Deoghar', 'Jharkhand'], ['Dewas', 'Madhya Pradesh'], ['Dharamshala', 'Himachal Pradesh'],
  ['Dibrugarh', 'Assam'], ['Dimapur', 'Nagaland'], ['Dindigul', 'Tamil Nadu'],
  ['Durgapur', 'West Bengal'], ['Erode', 'Tamil Nadu'], ['Firozabad', 'Uttar Pradesh'],
  ['Gandhinagar', 'Gujarat'], ['Gangtok', 'Sikkim'], ['Gaya', 'Bihar'],
  ['Haldwani', 'Uttarakhand'], ['Haridwar', 'Uttarakhand'], ['Hazaribagh', 'Jharkhand'],
  ['Hisar', 'Haryana'], ['Hosur', 'Tamil Nadu'], ['Imphal', 'Manipur'],
  ['Itanagar', 'Arunachal Pradesh'], ['Jalgaon', 'Maharashtra'], ['Jamnagar', 'Gujarat'],
  ['Jhansi', 'Uttar Pradesh'], ['Jorhat', 'Assam'], ['Junagadh', 'Gujarat'],
  ['Kadapa', 'Andhra Pradesh'], ['Kakinada', 'Andhra Pradesh'], ['Kalaburagi', 'Karnataka'],
  ['Kannur', 'Kerala'], ['Karimnagar', 'Telangana'], ['Karnal', 'Haryana'],
  ['Khammam', 'Telangana'], ['Kohima', 'Nagaland'], ['Kollam', 'Kerala'],
  ['Korba', 'Chhattisgarh'], ['Kottayam', 'Kerala'], ['Kurnool', 'Andhra Pradesh'],
  ['Latur', 'Maharashtra'], ['Malda', 'West Bengal'], ['Mathura', 'Uttar Pradesh'],
  ['Moradabad', 'Uttar Pradesh'], ['Muzaffarnagar', 'Uttar Pradesh'], ['Muzaffarpur', 'Bihar'],
  ['Nagercoil', 'Tamil Nadu'], ['Nanded', 'Maharashtra'], ['Nellore', 'Andhra Pradesh'],
  ['Nizamabad', 'Telangana'], ['Palakkad', 'Kerala'], ['Panchkula', 'Haryana'],
  ['Panipat', 'Haryana'], ['Puducherry', 'Puducherry'], ['Puri', 'Odisha'],
  ['Rajamahendravaram', 'Andhra Pradesh'], ['Ratlam', 'Madhya Pradesh'],
  ['Rewa', 'Madhya Pradesh'], ['Rishikesh', 'Uttarakhand'], ['Rohtak', 'Haryana'],
  ['Roorkee', 'Uttarakhand'], ['Rourkela', 'Odisha'], ['Sagar', 'Madhya Pradesh'],
  ['Saharanpur', 'Uttar Pradesh'], ['Sambalpur', 'Odisha'], ['Sangli', 'Maharashtra'],
  ['Satara', 'Maharashtra'], ['Satna', 'Madhya Pradesh'], ['Shillong', 'Meghalaya'],
  ['Shimla', 'Himachal Pradesh'], ['Shivamogga', 'Karnataka'], ['Sikar', 'Rajasthan'],
  ['Silchar', 'Assam'], ['Siliguri', 'West Bengal'], ['Solan', 'Himachal Pradesh'],
  ['Solapur', 'Maharashtra'], ['Sonipat', 'Haryana'], ['Thanjavur', 'Tamil Nadu'],
  ['Thoothukudi', 'Tamil Nadu'], ['Thrissur', 'Kerala'], ['Tirunelveli', 'Tamil Nadu'],
  ['Tirupati', 'Andhra Pradesh'], ['Tiruppur', 'Tamil Nadu'], ['Tumakuru', 'Karnataka'],
  ['Udaipur', 'Rajasthan'], ['Udupi', 'Karnataka'], ['Ujjain', 'Madhya Pradesh'],
  ['Vapi', 'Gujarat'], ['Vellore', 'Tamil Nadu'], ['Warangal', 'Telangana'],
  ['Yamunanagar', 'Haryana'],
]

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const guideByName = new Map(
  getAllCitiesWithData().map(({ slug, name }) => [name.toLowerCase(), slug]),
)

export const CITY_DIRECTORY = [
  ...tierOne.map(([name, state]) => ({ name, state, tier: 1 })),
  ...tierTwo.map(([name, state]) => ({ name, state, tier: 2 })),
  ...tierThree.map(([name, state]) => ({ name, state, tier: 3 })),
].map((city) => ({
  ...city,
  slug: guideByName.get(city.name.toLowerCase()) || slugify(city.name),
  hasGuide: guideByName.has(city.name.toLowerCase()),
}))

export function getPlannerCityOptions() {
  return CITY_DIRECTORY.map(({ slug, name, state, tier, hasGuide }) => ({
    slug, name, state, tier, hasGuide,
  }))
}


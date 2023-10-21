const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  // RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  // RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  // GET_USER_ENROLLED_SHOPS_API: BASE_URL + "/profile/getEnrolledshops",
  GET_SHOPPER_DATA_API: BASE_URL + "/profile/ShopperDashboard",
}

// STUDENTS ENDPOINTS
export const studentEndpoints = {
  shop_PAYMENT_API: BASE_URL + "/payment/capturePayment",
  shop_VERIFY_API: BASE_URL + "/payment/verifyPayment",
  SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",
}

// shop ENDPOINTS
export const shopEndpoints = {
  GET_ALL_SHOP_API: BASE_URL + "/shop/getAllShops",
  SHOP_DETAILS_API: BASE_URL + "/shop/getShopDetails",
  EDIT_SHOP_API: BASE_URL + "/shop/editShop",
  SHOP_CATEGORIES_API: BASE_URL + "/shop/showAllCategories",
  CREATE_SHOP_API: BASE_URL + "/shop/createShop",
  CREATE_SECTION_API: BASE_URL + "/shop/addSection",
  CREATE_SUBSECTION_API: BASE_URL + "/shop/addSubSection",
  UPDATE_SECTION_API: BASE_URL + "/shop/updateSection",
  UPDATE_SUBSECTION_API: BASE_URL + "/shop/updateSubSection",
  GET_ALL_SHOPPER_SHOPS_API: BASE_URL + "/shop/getShoppershops",
  DELETE_SECTION_API: BASE_URL + "/shop/deleteSection",
  DELETE_SUBSECTION_API: BASE_URL + "/shop/deleteSubSection",
  DELETE_SHOP_API: BASE_URL + "/shop/deleteshop",
  GET_FULL_SHOP_DETAILS_AUTHENTICATED:
    BASE_URL + "/shop/getFullShopDetails",
  SHOP_STORE_API: BASE_URL + "/shop/updateShopStore",
  CREATE_RATING_API: BASE_URL + "/shop/createRating",
  CATEGORIES_API: BASE_URL + "/shop/showAllCategories",
}

// RATINGS AND REVIEWS
export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: BASE_URL + "/shop/getReviews",
}

// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + "/shop/showAllCategories",
}

// CATALOG PAGE DATA 
export const catalogData = {
  CATALOGPAGEDATA_API: BASE_URL + "/shop/getCategoryPageDetails",
}
// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
}

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}
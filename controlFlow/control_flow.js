let userRole = "admin";
let accesslevel; 

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limted access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage ;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log ("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticaticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticaticationStatus);

if (userCategory === "Employee") {
    accessLevel = "Full Access to Dietary Services."
} else if (userCategory === "Enrolled Member") {
    accesslevel = "Access to Dietary Services and 1-on-1 Dietician Meeting."
}

if (userType === "Subscriber") {
    accesslevel = "Partial Access to Dietary Services"
} else {
    userMessage = "Please enroll to gain access to Dietary Services."
}

console.log ("Access Level:", userCategory);
console.log ("Subscription Type:", userType);

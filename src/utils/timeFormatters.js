export const get12Hour = (timeStamp) => {
    // Ensure timeStamp is a valid number
    if (isNaN(timeStamp)) {
        return "Invalid Time"; // Return a fallback message for invalid timestamps
    }

    const time = new Date(timeStamp);

    // Check if the date object is valid
    if (isNaN(time.getTime())) {
        return "Invalid Date"; // Return a fallback message for invalid Date object
    }

    return time.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
};

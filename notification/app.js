function showNotification() {
    const notification = new Notification("New message from Rayaru", {
        body: "Om shree Raghavendray Namaha!!!",
        icon: "Annotation 2020-08-07 202845.png"
    });
    notification.onclick = (e) => {
        window.location.href = "index.html"
    }
    setTimeout(notification.close.bind(notification), 5000);
}

console.log(Notification.permission);

if (Notification.permission === "granted") {
    showNotification()
} else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        if(permission ==="granted") {
            showNotification();
        }
        
    });
}
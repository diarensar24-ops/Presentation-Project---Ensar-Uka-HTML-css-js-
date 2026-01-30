document.addEventListener("DOMContentLoaded", () => {
    const extraContainer = document.querySelector(".extra"); // container exists now

    async function fetchUsers() {
        try {
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();
            const users = data.users.slice(0, 7); // only first 3 users

            users.forEach(user => {
                const activity = document.createElement("div");
                activity.classList.add("activity");

                activity.innerHTML = `
                    &#8226; Order <strong>#3987</strong> shipped<br>
                    Inventory synced (14:21)<br>
                    New support ticket from <em>${user.firstName}</em>
                `;

                extraContainer.appendChild(activity);
            });
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    fetchUsers();
});
// Waits for the page to load before running the script below
document.addEventListener("DOMContentLoaded", function () {

    // This gets the thing that has the id "liveToast"
    const toastLiveExample = document.getElementById('liveToast');

    // It gets the thing that has the id "toast-message"
    const toastMessage = document.getElementById('toast-message');

    // It gets the thing that has the id "minutes-ago"
    const minutesAgo = document.getElementById('minutes-ago');

    // It gets the thing that has the id "minutes-ago"
    const profileImage = document.getElementById('profile-image');

    const myName = document.getElementById('my-name');

    // Creates a toast from the HTML
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

    // A new constant named "hasVisited" is made and since the browser has this little memory called "localStorage"
    // it's gonna grab the status of hasVisited, we'll set it to true later on if they haven't visited before
    const hasVisited = localStorage.getItem('hasVisited');
    // After it has the status of hasVisited, it's gonna ask this question below


    // Have they visited? We're gonna find out here, if they haven't then well.. You'll see
    if (hasVisited) {
        // If they have visited before
        toastMessage.textContent = "See? Now I'm a new message, also look at the banner at the top, I hid like the funniest part of my project there if you look at it long enough and don't scroll out of view from it";

        minutesAgo.textContent = "Hi Mr. Crockett";

        profileImage.src = "images/freddySideView.jpg";
        profileImage.alt = "My 'amazing' side view of Freddy Fazbear";

        myName.textContent = "Joshua";

        // This is what happens if they didn't visit this website before (line 23 is what actually happens)
    } else {
        toastMessage.textContent = "Hey, you should refresh the page trust me.";

        minutesAgo.textContent = "I don't know maybe a few minutes ago";

        profileImage.src = "images/blackScreen.jpg"
        profileImage.alt = "Just pure black, that's all"

        myName.textContent = ""; // Haha it's nothing

        // But the unsuspecting viewer doesn't realize we've logged their visit to this site as well
        localStorage.setItem('hasVisited', 'true');
    }

    // When the page loads, it shows the toast!
    toastBootstrap.show();
});

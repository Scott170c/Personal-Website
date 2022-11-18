function Projects() {
    window.location.href = "https://scott170.repl.co/projects";
}

function CopyText() {
    navigator
        .clipboard
        .writeText("BRUHisbackbois#4570");
    alert("Copied to Clipboard!")
}

function RedirectToGitHub() {
    window.location.href = "https://github.com/scott170c";
}

function RedirectToReplit() {
    window.location.href = "https://replit.com/@scott170dev";
}

function RedirectToInstagram() {
    window.location.href = "https://www.instagram.com/BRUHisbackbois";
}

function SendEmail() {
    window.open('mailto:scott.dev.tests@gmail.com');
}

function SendtoCenter(event) {
    const el = event.target;
    el.setAttribute('style', 'position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); transition: 0ms; z-index 1; width: 400px; height: 400px;');
}
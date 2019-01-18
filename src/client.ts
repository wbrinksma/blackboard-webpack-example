import { Backend, BBIframeBackend, BBUserInfo, BBUserInfoById } from 'blackboardlib';

function loadUI(): void {
    const getUserId = document.createElement('form');
    const userIdTextbox = document.createElement('input');
    userIdTextbox.setAttribute('type', 'text');
    userIdTextbox.setAttribute('id', 'userId');

    const userIdButton = document.createElement('button');
    userIdButton.innerText = "getUserId";
    userIdButton.onclick = (ev: MouseEvent) => {
        ev.preventDefault();
        const tb = document.getElementById('userId') as HTMLInputElement;
        // tslint:disable-next-line:no-console
        loadUserByUserId(tb.value);
    };

    getUserId.appendChild(userIdTextbox);
    getUserId.appendChild(userIdButton);

    document.body.appendChild(getUserId);
}

function loadUserByUserId(userId: string): BBUserInfo {
    const user = new BBUserInfoById(userId);
    user.getUserInfo().then((result: any) => {
        // tslint:disable-next-line:no-console
        console.log(result);
    });

    // tslint:disable-next-line:no-console
    console.log(user.getUserName);

    return user;
}

window.onload = () => {
    // tslint:disable-next-line:no-console
    Backend.setBackend(new BBIframeBackend());

    loadUI();
};

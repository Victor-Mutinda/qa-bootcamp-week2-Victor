type UserProfile = {
    id : number,
    username: string,
    settings?: {
        notifications : boolean 
    }

}

// first test user - has notifications ON
let victor : UserProfile = {
    id : 1,
    username : "Victor Mutinda",
    settings : {
        notifications : true
    }
}

// second test user - has no settings
let annette : UserProfile = {
    id : 2,
    username : "Annette"

}

let mutinda : UserProfile = {
    id : 3,
    username : "Muthini Mutinda",
    settings : undefined
}

function isNotified(profile : UserProfile) : boolean {
    const notified = profile.settings?.notifications === true;
    console.log(notified);
    return notified;

}

isNotified(victor);
isNotified(annette);
isNotified(mutinda);

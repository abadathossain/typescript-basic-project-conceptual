"use strict";
{
    const arr = [1, 2, 3, 4];
    const newArr = arr.map((elem) => elem * elem);
    // console.log(newArr)
    const greetFriends = (...friends) => {
        friends.forEach((friend) => {
            console.log(`Hi ${friend}`);
        });
    };
    greetFriends('a', 'b', 'c');
}

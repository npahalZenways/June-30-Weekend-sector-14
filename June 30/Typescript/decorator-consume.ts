import { setSkill } from "./decorator";


@setSkill('dfghjk')
class player{
    skill;
}

var myPlayer = new player();

console.log(myPlayer.skill);
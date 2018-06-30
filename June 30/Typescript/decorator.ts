export function setSkill(param){
    return function(target){
        target.prototype.skill = param
    }
}
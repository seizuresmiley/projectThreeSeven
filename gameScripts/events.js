class Event{
    constructor(target,type,value){
        var obj = target;
        var event = new CustomEvent(type,{"value" : value})
        obj.dispatchEvent(event);
    }
}
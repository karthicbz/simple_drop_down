import { createElement, divPacker } from "./element_creator";

const DropDownMenu = (()=>{
    /** className: any, idName: any, ...args: array of values must be [tagname, class, id, text]*/
    const makeMenu = (className, idName, ...args)=>{
        args.push(['div', null, 'up-arrow', null]);
        return divPacker(undefined, args, className, idName);
    }
    return {makeMenu};
})();
    

export {DropDownMenu};
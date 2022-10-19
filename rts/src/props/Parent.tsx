import { Child,ChildAsFC } from "./Child"

const Parent = () => {
    return <>
    <Child color="red" onClick={() => console.log(`Clicked`)} />
    <ChildAsFC color="red" children="asdf" onClick={() => console.log(`Clicked`)} />
    </>
}

export default Parent
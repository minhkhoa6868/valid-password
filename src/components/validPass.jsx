export default function ValidPass(props){
    return (
        <ul class="list-disc text-sm text-gray-400 pl-3 pt-2">
            <li id={props.id1}>At least an uppercase</li>
            <li id={props.id2}>At least a special character</li>
            <li id={props.id3}>At least a number</li>
            <li id={props.id4}>Length between 6 to 12 character</li>
        </ul>
    );
}
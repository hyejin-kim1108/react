import Book from "./Book";

function Library(props) { 
    return (
        <div>
            <Book name="처음만난 파이썬" numOfPage={300}/>
            <Book name="처음만난 파이썬2" numOfPage={200}/>
            <Book name="처음만난 파이썬3" numOfPage={100}/>
        </div>
    );
} 

export default Library; 
import './Hello.css';
function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
        />
    );
}

const Hello = ({name="Smith",surname="Doe",age=10}) => {
    return (
        <>
            <Profile />
            <h1>Hello {name} {surname} {age}</h1>
        </>
    );
}
export default Hello;
import Link from "next/link";

const Navbar = () => {
    const styles = {
        display: 'flex',
        backgroundColor: 'grey',
        justifyContent: 'space-between',
        padding: '1rem'
    }
    return (
       <div style={styles}>
            <Link href='/about'>
                <a>About Page</a>
            </Link>
            <Link href='/contact'>
                <a>Contact</a>
            </Link>
            <Link href='/more-info'>
                <a>More Info</a>
            </Link>
        </div>
    )
}

export default Navbar;
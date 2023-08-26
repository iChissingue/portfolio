import styles from './Head.module.css'

export const Head = () =>{
    return (
        <div className={styles.head}>
            <h3 className={styles.title}>iChissingue</h3>
            <navbar className={styles.navBar}>
                <a>About </a>
                <a>Experience </a>
                <a>Projects </a>
                <a>Contact </a>
                <a>Resume </a>
            </navbar>
        </div>
    )
}
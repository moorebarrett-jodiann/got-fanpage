
function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <p className="repo">
                        <a 
                            href="https://github.com/moorebarrett-jodiann/got-fanpage" 
                            to="https://github.com/moorebarrett-jodiann/got-fanpage" 
                            rel="noreferrer">
                            Game of Thrones Fan Page
                        </a>
                    </p>
                    <p className="note">Note: data shown is pulled from the 
                        <a className="disclosure" href="https://thronesapi.com/" to="https://thronesapi.com/">
                            Game of Thrones Character API
                        </a>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer
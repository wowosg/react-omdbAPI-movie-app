import React from 'react'

const NotificationComponent = () => {
    const alertCss = {
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: '300px',
        height: '40px',
        margin: 0,
        padding: 0,
        justifyContent: 'center',
        opacity: 0.8,
    }

    return (
        <>
            <div style={alertCss} className="alert alert-success d-flex align-items-center" role="alert">
                <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-exclamation-triangle-fill"
                    viewBox="0 0 16 16"
                >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <div>                   
                    &nbsp;&nbsp;added susscessfully.
                </div>
            </div>         
        </>
    )
}

export default NotificationComponent

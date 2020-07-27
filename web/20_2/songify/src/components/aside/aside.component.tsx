import React from 'react';
import './aside.component.scss'
import { NavLink } from 'react-router-dom';

interface IProps {}

const Aside : React.FC<IProps> = props => {
    return (
        <aside className="aside">

            <section className="aside-app aside-section">
                <h6 className="aside-section__title">App</h6>
                <section className="aside-section__content d-flex flex-column">
                    <NavLink exact to="/explore" className="aside-section__content-items hover">
                        <i className="fa fa-wpexplorer mr-2" aria-hidden="true"></i>
                        <span>Explore</span>
                    </NavLink>
                </section>
            </section>

            <section className="aside-personal aside-section">
                <h6 className="aside-section__title">Personal</h6>
                <section className="aside-section__content d-flex flex-column">
                    
                    <NavLink exact to="/favorite" className="aside-section__content-items hover">
                        <i className="fa fa-heart mr-2" aria-hidden="true"></i>
                        <span>Favorite</span>
                    </NavLink>

                    <NavLink exact to="/genre" className="aside-section__content-items hover">
                        <i className="fa fa-music mr-2" aria-hidden="true"></i>
                        <span>Genre</span>
                    </NavLink>

                </section>
            </section>

        </aside>
    )
}

export default Aside
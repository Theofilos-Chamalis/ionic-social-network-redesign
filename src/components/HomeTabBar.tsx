import React, { Component } from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet } from '@ionic/react';
import { home, homeOutline, newspaper, newspaperOutline, notifications, notificationsOutline, mail, mailOutline } from 'ionicons/icons';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import News from '../pages/News';
import Mail from '../pages/Mail';
import Notifications from '../pages/Notifications';

export default class HomeTabBar extends Component<{}, { selectedTab: number }> {
    constructor(props: any) {
        super(props)

        this.state = {
            selectedTab: 1
        }
    }

    selectTab = (tabId: number) => {
        this.setState({
            selectedTab: tabId
        });
    }

    render() {
        return (
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/home" component={Home} exact={true} />
                    <Route path="/news" component={News} exact={true} />
                    <Route path="/mail" component={Mail} exact={true} />
                    <Route path="/notifications" component={Notifications} exact={true} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="home" onClick={() => this.selectTab(1)} href="/home">
                        <IonIcon icon={this.state.selectedTab === 1 ? home : homeOutline} color={this.state.selectedTab === 1 ? "primary" : "black"} />
                        <IonLabel color={this.state.selectedTab === 1 ? "primary" : "black"}>Home</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="news" onClick={() => this.selectTab(2)} href="/news">
                        <IonIcon icon={this.state.selectedTab === 2 ? newspaper : newspaperOutline} color={this.state.selectedTab === 2 ? "primary" : "black"} />
                        <IonLabel color={this.state.selectedTab === 2 ? "primary" : "black"}>News</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="notifications" onClick={() => this.selectTab(3)} href="/notifications">
                        <IonIcon icon={this.state.selectedTab === 3 ? notifications : notificationsOutline} color={this.state.selectedTab === 3 ? "primary" : "black"} />
                        <IonLabel color={this.state.selectedTab === 3 ? "primary" : "black"}>Notifications</IonLabel>
                        <IonBadge>6</IonBadge>
                    </IonTabButton>

                    <IonTabButton tab="mail" onClick={() => this.selectTab(4)} href="/mail">
                        <IonIcon icon={this.state.selectedTab === 4 ? mail : mailOutline} color={this.state.selectedTab === 4 ? "primary" : "black"} />
                        <IonLabel color={this.state.selectedTab === 4 ? "primary" : "black"}>Mail</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        );
    }
}

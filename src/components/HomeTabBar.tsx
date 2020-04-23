import React, { Component } from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet } from '@ionic/react';
import { home, homeOutline, newspaper, newspaperOutline, notifications, notificationsOutline, mail, mailOutline } from 'ionicons/icons';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';

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
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="home" onClick={() => this.selectTab(1)}>
                        <IonIcon icon={this.state.selectedTab === 1 ? home : homeOutline} />
                        <IonLabel>Home</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="news" onClick={() => this.selectTab(2)}>
                        <IonIcon icon={this.state.selectedTab === 2 ? newspaper : newspaperOutline} />
                        <IonLabel>News</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="notifications" onClick={() => this.selectTab(3)}>
                        <IonIcon icon={this.state.selectedTab === 3 ? notifications : notificationsOutline} />
                        <IonLabel>Notifications</IonLabel>
                        <IonBadge>6</IonBadge>
                    </IonTabButton>

                    <IonTabButton tab="mail" onClick={() => this.selectTab(4)}>
                        <IonIcon icon={this.state.selectedTab === 4 ? mail : mailOutline} />
                        <IonLabel>Mail</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        );
    }
}

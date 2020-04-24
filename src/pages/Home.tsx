import React, { Component } from 'react';
import {
  IonContent, IonHeader, IonPage, IonToolbar, IonSearchbar,
  IonAvatar, IonIcon, IonButton, IonButtons
} from '@ionic/react';
import { playCircleOutline, starOutline } from 'ionicons/icons';
import './Home.css';

export default class Home extends Component<{}, { searchText: string }> {
  constructor(props: any) {
    super(props)

    this.state = {
      searchText: ''
    }
  }

  setSearchText = (textToSearch: string) => {
    this.setState({
      searchText: textToSearch
    });
  }

  render() {
    return (
      <IonPage>
        <IonHeader mode="md">
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton fill="clear" color="secondary" shape="round">
                <IonAvatar slot="start">
                  <img
                    src="https://eu.ui-avatars.com/api/?name=John+Doe&background=3880ff&color=fff"
                    alt="avatar"
                  />
                </IonAvatar>
              </IonButton>
            </IonButtons>
            <IonSearchbar
              mode="ios"
              value={this.state.searchText}
              onIonChange={e => this.setSearchText(e.detail.value!)}
              placeholder="Search Twitter"
              animated
              className="placeholder"
              inputMode="text"
            />
            <IonButtons slot="end">
              <IonButton color="secondary">
                <IonIcon slot="icon-only" icon={playCircleOutline} />
              </IonButton>
              <IonButton color="secondary">
                <IonIcon slot="icon-only" icon={starOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>

        </IonContent>
      </IonPage>
    );
  }
}

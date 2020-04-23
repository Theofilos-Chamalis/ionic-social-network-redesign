import React, { Component } from 'react';
import {
  IonContent, IonHeader, IonPage, IonToolbar, IonSearchbar,
  IonGrid, IonRow, IonCol, IonAvatar, IonIcon
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
            <IonGrid className="ion-no-padding ion-padding-top">
              <IonRow>
                <IonCol size="2">
                  <IonAvatar className="ion-margin-start">
                    <img
                      src="https://eu.ui-avatars.com/api/?name=John+Doe&background=3880ff&color=fff"
                      alt="avatar"
                    />
                  </IonAvatar>
                </IonCol>
                <IonCol size="8">
                  <IonSearchbar
                    mode="ios"
                    value={this.state.searchText}
                    onIonChange={e => this.setSearchText(e.detail.value!)}
                    placeholder="Search Twitter"
                    animated
                    className="placeholder"
                    inputMode="text"
                  />
                </IonCol>
                <IonCol size="1" className="ion-text-center">
                  <IonIcon
                    id="toolbar-icons-right1"
                    icon={playCircleOutline}
                    color="secondary"
                  />
                </IonCol>
                <IonCol size="1" className="ion-text-center">
                  <IonIcon
                    id="toolbar-icons-right2"
                    icon={starOutline}
                    color="secondary"
                  />
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        <IonContent>

        </IonContent>
      </IonPage>
    );
  }
}

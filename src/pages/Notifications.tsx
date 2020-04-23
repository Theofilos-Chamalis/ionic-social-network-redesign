import React, { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

export default class Notifications extends Component<{}, {}> {
  constructor(props: any) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <IonPage>
        <IonHeader mode="md">
          <IonToolbar>
            <IonTitle>Notifications</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>

        </IonContent>
      </IonPage>
    );
  }
}

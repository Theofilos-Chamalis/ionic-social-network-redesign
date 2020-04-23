import React, { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

export default class Mail extends Component<{}, {}> {
  constructor(props: any) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <IonPage>
        <IonHeader mode="md">
          <IonToolbar>
            <IonTitle>Mail</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>

        </IonContent>
      </IonPage>
    );
  }
}

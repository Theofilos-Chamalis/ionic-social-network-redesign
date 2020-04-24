import React, { Component } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonText, IonLabel } from '@ionic/react';

export default class TweetCard extends Component<{ cardTitle: string, cardSubtitle: string, cardBody: string, cardTimestamp: string }, {}> {
    constructor(props: any) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>{this.props.cardTitle}</IonCardTitle>
                    <IonCardSubtitle>{this.props.cardSubtitle}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonText>{this.props.cardBody}</IonText>
                    <IonLabel className="ion-text-right">
                        <p>{this.props.cardTimestamp}</p>
                    </IonLabel>
                </IonCardContent>
            </IonCard>
        );
    }
};

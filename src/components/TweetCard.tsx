import React, { Component } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonText, IonLabel, IonImg } from '@ionic/react';
import './TweetCard.css'

export default class TweetCard extends Component<{ cardTitle: string, cardSubtitle: string | 'none', cardBodyImage: string | 'none', cardBodyText: string | 'none', cardTimestamp: string | 'none' }, {}> {
    constructor(props: any) {
        super(props)

        this.state = {}
    }

    isNone = (propToCheck: string) => {
        if (propToCheck === 'none') {
            return null;
        }

        return propToCheck;
    }

    render() {
        return (
            <IonCard mode="ios">
                <IonCardHeader>
                    <IonCardTitle>{this.isNone(this.props.cardTitle)}</IonCardTitle>
                    <IonCardSubtitle>{this.isNone(this.props.cardSubtitle)}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    {this.isNone(this.props.cardBodyImage) ?
                        <IonImg src={this.props.cardBodyImage} className="ion-margin-bottom" /> :
                        null
                    }
                    <IonText>{this.isNone(this.props.cardBodyText)}</IonText>
                    <IonLabel className="ion-text-right">
                        <p><br />{this.isNone(this.props.cardTimestamp)}</p>
                    </IonLabel>
                </IonCardContent>
            </IonCard>
        );
    }
};

import React from 'react';
import { View, Image, Text } from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/diego3g.png' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>  
                        Diego F
                    </Text>
                    <Text style={styles.subject}>
                        Matematica
                    </Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                {'\n'}{'\n'}
                Fuga odit blanditiis vel id obcaecati aspernatur, quis, vero aut facere nulla temporibus 
                voluptatem laudantium quos? Nobis sapiente asperiores eos laudantium libero.
            </Text>
            
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image source={heartOutLineIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entar em contanto</Text>
                    </RectButton>
                </View>
            </View>
        </View>

    );
}

export default TeacherItem;
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
    container: { flex: 1 },
    modalWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        height: modalHeight
    },
    modal: {  
        backgroundColor: boxBgColor,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderStyle: 'solid',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
    },
    Text: {  
        padding: 20,  
        color: '#000000',  
        fontSize: 18  
    },  
});

if(fullscreen) {
    styles.modalWrapper = {
        ...styles.modalWrapper,
        flex: 1
    };

    styles.modalContainer = {
        ...styles.modalContainer,
        flex: 1
    };
}
export default styles;
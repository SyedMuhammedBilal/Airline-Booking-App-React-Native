export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },  
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        height: 400,
        backgroundColor: '#000',
        borderRadius: 25,

    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 55
    },
    logoBox: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        borderRadius: 15,
        backgroundColor: '#fc3872',
        shadowColor: '#fc3872',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 60,
    },
    logoText: {
        marginTop: 30
    },
    inputFields: {
        marginTop: 40
    },
    inputBox: {
        marginBottom: 20
    },
    textInputContainer: {
        marginHorizontal: '4%',
        backgroundColor: scheme === 'dark' ? 'rgb(28, 28, 30)' : '#fff',
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 10,
        flexDirection: 'row',
        zIndex: -1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textInput: {
        fontSize: 16,
        width: '100%',
        color: colors.text,
        paddingLeft: 10
    },
    textDropDownContainer: {
        marginHorizontal: '4%',
        backgroundColor: scheme === 'dark' ? 'rgb(28, 28, 30)' : '#fff',
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 10,
        flexDirection: 'row',
        zIndex: -1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    dropDownInput: {
        fontSize: 16,
        width: '100%',
        color: 'grey',
        paddingLeft: 20,
    },
    bookButton: {
        marginTop: '55%',
        marginHorizontal: 35,
        marginBottom: 50,
        backgroundColor: 'rgb(28, 28, 30)',
        paddingBottom: 20,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    bookBtn: {
        backgroundColor: '#fc3841',
        justifyContent: 'space-around',
        // alignItems: 'center',
        borderRadius:10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 15,
        marginHorizontal: 20,
        display:'flex',
        flexDirection: 'row'
    }
})
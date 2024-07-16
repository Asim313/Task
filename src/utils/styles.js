import {StyleSheet, Dimensions, Platform} from 'react-native';
import {mvs} from './metrices';
const {width, height} = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const buttonHeightPercentage = 8; // Adjust this percentage as needed

export const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#000000', // This sets the background color to white.
  },
  parentContainer2: {
    flexDirection: 'row', // Align children horizontally
    justifyContent: 'space-between', // Distribute space between children
    alignItems: 'center', // Align children vertically in the center
    borderTopColor: '#FF69B4',
    borderTopWidth: 2,
    backgroundColor: '#1E1E1E',
    padding: 10,
  },

  itemContainerFlatList: {
    // Other styling for your item container
    borderBottomWidth: 1, // Set the border width
    borderBottomColor: '#FF8AD2', // Set the border color to #FF8AD2
  },
  parentContainerStyle: {
    width: '100%', // Take up full width
    alignItems: 'flex-start', // Align children to the start (left)
    paddingHorizontal: 12, // Keep content from the edges
  },
  loginscreen: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: mvs(31),
    width: '100%',
  },
  loginscreen2: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
    width: '100%',
  },
  loginscreen3: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    alignItems: 'stretch', // Adjust this if necessary
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    width: '100%',
  },
  loginscreenLeftAlign: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 12,
    width: '100%',
  },
  promoCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  promoCodeInput: {
    flex: 1,
    height: 40,
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    marginRight: 10,
    color: '#000',
  },
  promoCodeButton: {
    backgroundColor: 'white',
    width: '30%',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  infoTextContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  infoText: {
    color: 'white',
    fontSize: 14,
  },
  promoCodeButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  promoCodeMessage: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  loginheading: {
    fontSize: 26,
    marginBottom: 10,
  },
  bigTextContainerNew: {
    alignItems: 'center', // Center the text horizontally
    paddingTop: mvs(100),
    flex: 1,
  },
  textContainerNew: {
    // This container will stack the text elements vertically
    justifyContent: 'center',
  },
  rightAlignedContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Aligns content to the right
    flexDirection: 'row', // Aligns children horizontally
  },
  bigTextContainer: {
    textAlign: 'center',
    paddingVertical: mvs(12),
    width: mvs(308),
    alignSelf: 'center',
    //marginVertical: 15, // Optional: To give some vertical spacing
  },
  textContainer: {
    marginTop: mvs(16),
    paddingRight: mvs(10),
  },
  textContainer2: {
    flexDirection: 'column',
    marginLeft: 10,
    width: '75%',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  textContainer3: {
    flexDirection: 'column',
    marginLeft: 10,
    width: '100%',
  },
  newLineText: {
    // Styling for the new line of text
    // For example:
    fontSize: 14,
    color: '#FF69B4',
    fontStyle: 'italic',
    // Add other styling as needed
  },
  middleText: {
    fontSize: 16, // Adjust the font size as needed
    color: 'white', // Color is set to white
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10, // Optional: If you want the text to be centered within the view
  },
  middleTextNew: {
    // Adjust the font size as needed
    color: 'white', // Color is set to white
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10, // Optional: If you want the text to be centered within the view
  },
  bigText: {
    fontSize: 24, // Adjust the font size as needed
    color: 'white', // Color is set to white
    textAlign: 'center', // Optional: If you want the text to be centered within the view
  },
  bigTextNew: {
    fontSize: 34,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  terms: {
    color: '#fff',
    fontSize: mvs(11),
    lineHeight: mvs(16.5),
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  rowContainer: {
    flexDirection: 'row', // Aligns items horizontally
    alignItems: 'center', // Aligns items vertically in the center
    // Add any additional styling as needed
  },
  textLeftAlign: {
    fontSize: mvs(24),
    lineHeight: mvs(36),
    fontFamily: 'Poppins-SemiBold', // or any size you desire
   // marginTop: mvs(39),
    textAlign: 'left',
    color: 'white', // or any color you desire
    paddingHorizontal: mvs(12),
  },
  textLeftAlignBig: {
    fontSize: 28, // or any size you desire
    textAlign: 'left',
    color: 'white', // or any color you desire
    paddingHorizontal: 12,
  },
  textCenterAlign: {
    fontSize: 24, // or any size you desire
    textAlign: 'center',
    color: 'white', // or any color you desire
    paddingHorizontal: 12, // optional padding to keep it from being too close to the edge
  },

  textCenterAlignSmall: {
    fontSize: 20, // or any size you desire
    textAlign: 'center',
    color: 'white', // or any color you desire
    paddingHorizontal: 12, // optional padding to keep it from being too close to the edge
  },
  closeIconStyle: {
    width: 14,
    height: 14,
    // Adjust size as needed
  },
  textLeftAlignSmall: {
    fontSize: mvs(14), // or any size you desire
    lineHeight: mvs(21),
    fontFamily: 'Poppins-Medium', // or any size you desire
    textAlign: 'left',
    color: 'white', // or any color you desire
    paddingHorizontal: 12, // optional padding to keep it from being too close to the edge
  },
  underline: {
    height: 1, // Thickness of the underline
    backgroundColor: 'yellow', // Color of the underline
    // Adjust the width if you want the underline to be shorter or longer than the text
  },
  textLeftAlignNormal: {
    fontSize: 18, // or any size you desire
    textAlign: 'left',
    color: '#FF8AD2', // updated to #FF8AD2 color
    textDecorationLine: 'underline', // underscore the text
    paddingHorizontal: 12, // optional padding to keep it from being too close to the edge
  },
  textLeftAlignNormal2: {
    fontSize: 20, // or any size you desire
    textAlign: 'left',
    color: 'white',
    paddingHorizontal: 12, // optional padding to keep it from being too close to the edge
  },
  bookHeader: {
    fontSize: 20,
    color: '#FF69B4', // Pink color for header

    fontWeight: 'bold',
  },
  bookHeaderContainer: {
    flexDirection: 'row', // This ensures children are laid out horizontally
    alignItems: 'center', // This vertically centers the children
    marginBottom: 10,
    marginTop: 20,
    justifyContent: 'flex-start',
  },
  categoryList: {
    width: '100%',
    alignSelf: 'center',
  },

  categoryItem: {
    padding: 10,
    borderColor: '#FF69B4',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    color: 'white',
    fontSize: 16,
  },

  clickableCategory: {
    padding: 10,
    backgroundColor: '#FF69B4',
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },

  clickableCategoryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlayImage7: {
    position: 'absolute', // Changed to absolute
    top: 100,
    left: 50,
    right: 0,
    bottom: 0,
    opacity: 0.7,
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  overlayImage: {
    position: 'absolute', // Changed to absolute
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
    width: '100%',
    height: '100%',
  },
  overlayImage3: {
    position: 'absolute', // Changed to absolute
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
    width: '80%',
    height: '80%',
  },
  overlayImage4: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
    width: '80%',
    height: '80%',
  },
  textInput: {
    backgroundColor: 'transparent',
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  footerTextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  imageContainerHor: {
    flexDirection: 'row', // Align children in a row
    alignItems: 'center', // Align children vertically in the center
    justifyContent: 'flex-start', // Align children to the start of the container
    position: 'absolute', // Position the container absolutely
    bottom: 175, // Position from the bottom
    right: 25, // Position from the right
  },
  imageContainerBack: {
    width: 30,
    height: 30,
    overflow: 'hidden', // Ensures the image does not exceed this container
  },
  profilePicture2: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profilePicture3: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },
  profileName: {
    marginRight: 50,
    fontSize: 15,
    color: '#fff',
  },
  messageContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  messageText: {
    fontSize: 12,
    color: 'white',
  },
  chatInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  chatInput2: {
    height: 40,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#d3d3d3',
    borderRadius: 20,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically in the center
    padding: 3, // Some padding for better visual appearance
    borderBottomColor: '#FF8AD2',

    borderBottomWidth: 2,
    width: '110%', // Ensure full width
  },
  specialChatItem: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically in the center
    padding: 3, // Some padding for better visual appearance
    borderTopColor: '#FF8AD2',
    borderBottomColor: '#FF8AD2',
    borderBottomWidth: 2,
    backgroundColor: 'black',
    borderTopWidth: 2,
    width: '110%', // Ensure full width
  },
  specialChatItemNoBorder: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically in the center
    padding: 3, // Some padding for better visual appearance
    borderTopColor: '#FF8AD2',
    borderBottomColor: '#FF8AD2',
    borderBottomWidth: 2,
    backgroundColor: 'black',
    borderTopWidth: 2,
    width: '110%', // Ensure full width
    borderTopWidth: 0,
  },

  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  nameText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40, // to make it circular
    marginRight: 10, // spacing between the image and the chat details
  },
  profileImage22: {
    width: 70,
    height: 70,
    borderRadius: 40, // to make it circular
    marginRight: 10, // spacing between the image and the chat details
  },
  centerContainer: {
    flex: 100,
    alignItems: 'center',
  },
  centerContainer2: {
    flex: 100,
    alignItems: 'center',
    marginTop: 10,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  rightContainer2: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 10,
  },
  imagesContainer: {
    flex: 1,
  },
  profileImagesContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    marginBottom: 5,
    flex: 1,
    width: '100%',
  },
  profileImagesContainer2: {
    flexDirection: 'row', // To display images horizontally
    marginTop: 10, // Add some margin at the top
    justifyContent: 'center', // To center the images horizontally,
    marginBottom: 5,
  },
  profileImagesContainer3: {
    flexDirection: 'row',
    marginTop: 10,

    marginBottom: 5,

    width: '100%',
  },
  horizontalProfileImage: {
    width: 80, // Adjust width as needed
    height: 80, // Adjust height as needed
    borderRadius: 40, // This will make it circular
    marginRight: 5, // Spacing between images
  },
  outerContainer: {
    flex: 1,
    flexDirection: 'column', // This ensures that children are stacked vertically
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 1,
    alignItems: 'center',
  },
  bulletPoint: {
    marginRight: 10, // Adjust the spacing between the bullet point and the item text
    fontSize: 20, // Adjust the font size of the bullet point
  },
  headerContainer: {
    borderBottomWidth: 1, // Adding a border as you initially mentioned
    borderBottomColor: '#FF8AD2',
  },
  headerContainer2: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center items vertically
    justifyContent: 'flex-start', // Align items to the start of the container
    width: '100%', // Ensure the container takes the full width
    paddingHorizontal: 10, // Add some horizontal padding
    // Add any additional styling you need
  },
  headerTitle: {
    // Styles for your header title
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    justifyContent: 'center',
  },
  headerContainer2: {
    // Styles for your header container
    padding: 16,
    backgroundColor: '#EFEFEF', // Example background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1, // This will take the remaining space after the header
    backgroundColor: '#f5f5f5', // Example background color
  },
  settingsIcon: {
    width: 40,
    height: 40,
  },
  timeText: {
    fontSize: 12,
    color: '#aaa',
    marginLeft: 'auto',
  },
  footerAndInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logininputContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayIcon: {
    position: 'absolute',
    right: 0,
    left: 80,
    bottom: 0,
  },
  imageContainer3: {
    width: 70, // Match with profilePicture2 dimensions
    height: 70, // Match with profilePicture2 dimensions
    position: 'relative', // Needed for absolute positioning of children
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10, // Padding to the left and right to ensure images aren't touching the edges
    width: '100%',
    marginLeft: 15, // To make sure it spans the entire width of its parent
  },
  imageContainer5: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10, // Padding to the left and right to ensure images aren't touching the edges
    width: '100%',
    backgroundColor: '#3B3B3B',
  },

  imagePlaceholderText: {
    color: 'white',
    fontSize: 14,
    zIndex: 1, // Ensure the text is on top
  },
  imagePlaceholder: {
    width: 100,
    height: 110,
    borderColor: '#ccc',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  overlayText: {
    color: 'black',
    textAlign: 'right', // Text color
    // Other text styling as needed
  },
  overlayText2: {
    color: '#1B1B1B',
    textAlign: 'right', // Text color
    // Other text styling as needed
  },
  imagePreview: {
    width: '100%', // Ensures the image takes full width of the placeholder
    height: '100%', // Ensures the image takes full height of the placeholder
    resizeMode: 'contain', // Adjust this based on how you want images to fit
  },
  imagePreview2: {
    width: 100,
    height: 120,
    marginLeft: 28,
    marginBottom: 20,
  },
  imageCaptionStyle: {
    marginTop: 5, // Adjust space between the image and caption
    fontSize: 14, // Adjust caption font size
    color: '#FFF', // Adjust caption text color
  },
  imagePlaceholderText: {
    textAlign: 'center',
    color: '#ccc',
  },
  settingsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    // Add other styling as needed
  },

  settingsHeaderText: {
    color: '#fff',
    // Add other styling for the settings header text
  },
  scrollView: {
    padding: 20,
    width: '100%',
  },
  headerText2: {
    flex: 1, // Allows the text to fill the available space
    textAlign: 'center', // Centers the text
    color: 'white',
    fontSize: 20,
    marginRight: 20,
  },
  headerText3: {
    flex: 1, // Allows the text to fill the available space
    textAlign: 'center', // Centers the text
    color: '#FF8AD2',
    fontSize: 20,
    marginRight: 20,
  },
  accountPhoneContainer: {
    padding: 20,
  },
  phoneNumberBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  phoneNumberText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  verifyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  verifyImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  verifyTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  verifyDescription: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  verifySubtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    alignSelf: 'flex-start', // Ensure it aligns to the left
  },
  bulletContainer: {
    alignSelf: 'flex-start', // Ensure it aligns to the left
    paddingLeft: 20, // Add padding to match the bullet points
  },
  verifyBulletPoint: {
    color: 'white',
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 5,
    flexDirection: 'row',
  },
  verifyButton: {
    backgroundColor: '#FF8AD2',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkmarkIcon: {
    marginLeft: 10,
  },
  confirmationStatusText: {
    color: '#888',
    marginBottom: 20,
  },
  updateNumberText: {
    color: 'red',
    textDecorationLine: 'underline',
  },
  settingsListContainer: {
    flex: 1,
    // Add other styling as needed
  },
  headerText: {
    fontWeight: 'bold', // Make the text bold
    fontSize: 16, // Adjust the font size as needed
    marginBottom: 10, // Optional: Add some spacing below the header
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.2)',
    // Add other styling as needed
  },
  listIcon: {
    marginRight: 10,
    // Add other styling as needed
  },
  listItemText: {
    color: '#fff',
    // Add other styling as needed
  },
  itemText: {
    fontSize: 16,
    // Styles for your item text
  },
  button: {
    backgroundColor: '#333', // Choose a dark color
    padding: 15,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    // Add other styling as needed
  },
  glossyOverlay: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    top: 0,
    borderBottomLeftRadius: 30, // Match the button border radius
    borderBottomRightRadius: 30, // Match the button border radius
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // Adjust opacity
    // Here you'd add a linear gradient from transparent to white
  },
  button2: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    // Add other styling as needed
  },
  buttonSecondary: {
    backgroundColor: 'transparent', // Transparent or a different color
    padding: 15,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    alignSelf: 'center', // White border or a different color
    // Add other styling as needed
  },
  buttonSecondary: {
    backgroundColor: 'transparent', // Transparent or a different color
    padding: 15,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    alignSelf: 'center', // White border or a different color
    // Add other styling as needed
  },
  buttonSecondaryText: {
    color: '#fff',
    // Add other styling as needed
  },
  headerImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Aligns the images to the far left
    width: '100%',
  },
  headerContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  allfuncHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Ensure the alignment is to the start
    width: '100%',
    paddingHorizontal: 10, // Space between the images and the header container
  },
  additionalImageStyle: {
    width: 40, // Adjust the size based on your design
    height: 40,
    marginTop: 60,
  },
  defaultHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  fixedHeader: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    flex: 0.04,
    backgroundColor: '#1B1B1B',
    zIndex: 1, // ensure the header overlays other components
    alignItems: 'center', // center logo horizontally
    justifyContent: 'center', // center logo vertically
    marginBottom: 10,
  },
  fixedHeader2: {
    flex: 0.04,
    backgroundColor: '#1B1B1B',
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  fixedHeaderLeft: {
    flexDirection: 'row', // To layout children in a row.
    alignItems: 'center', // Vertically center-align children.
    justifyContent: 'flex-start',
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    flex: 0.08,
    backgroundColor: '#1B1B1B',
    zIndex: 1, // ensure the header overlays other components
    alignItems: 'center', // center logo horizontally
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10, // center logo vertically
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Adjust this as needed
  },
  headerCenter: {
    flex: 2, // Adjust this as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Adjust this as needed
  },
  watermark: {
    position: 'absolute', // Position absolutely
    bottom: 70, // 10px from the bottom
    right: 10, // 10px from the right
    width: 50, // Width of the watermark
    height: 50, // Height of the watermark
    opacity: 0.3,
    resizeMode: 'contain', // Adjust the opacity for the watermark
  },
  containerTemp: {
    position: 'relative',
  },
  sideBySideContainer: {
    padding: 6, // Add padding as required
    backgroundColor: '1B1B1B',
  },
  sideBySideImage: {
    width: 275, // Adjust the width
    height: 70, // Adjust the height
    resizeMode: 'contain',
    // marginLeft:60
    marginRight: 5,
  },
  sideBySideText: {
    flex: 0.8, // Take up remaining space
    marginLeft: 10, // Space between image and text
    color: 'white',
    // Add other text styling as needed
  },
  sideBySideText2: {
    flex: 0.1, // Take up remaining space
    color: 'white',
    marginLeft: 60,
    // Add other text styling as needed
  },
  watermark2: {
    position: 'relative', // Position absolutely
    bottom: 300, // 10px from the bottom
    right: 130, // 10px from the right
    width: 150, // Width of the watermark
    height: 150, // Height of the watermark
    opacity: 0.3,
    resizeMode: 'contain', // Adjust the opacity for the watermark
  },
  watermark3: {
    position: 'relative', // Position absolutely
    bottom: 350, // 10px from the bottom
    right: 40, // 10px from the right
    width: 50, // Width of the watermark
    height: 50, // Height of the watermark
    opacity: 0.3,
    resizeMode: 'contain', // Adjust the opacity for the watermark
  },
  watermark4: {
    position: 'absolute', // Position absolutely
    bottom: -50, // 10px from the bottom
    right: 130, // 10px from the right
    width: 150, // Width of the watermark
    height: 150, // Height of the watermark
    opacity: 0.3,
    resizeMode: 'contain', // Adjust the opacity for the watermark
  },
  watermark5: {
    position: 'relative', // Position absolutely
    bottom: 175, // 10px from the bottom
    right: 25, // 10px from the right
    width: 75, // Width of the watermark
    height: 75, // Height of the watermark
    opacity: 0.3,
    resizeMode: 'contain', // Adjust the opacity for the watermark
  },
  watermark6: {
    position: 'relative', // Changed to relative
    marginLeft: 275,
    marginBottom: 4,
    width: 60, // Width of the watermark
    height: 60, // Height of the watermark
    opacity: 0.7,
    resizeMode: 'contain', // Maintain aspect ratio of the image
  },
  watermark7: {
    position: 'relative', // Changed to relative
    marginLeft: 140,
    marginBottom: 4,
    width: 60, // Width of the watermark
    height: 60, // Height of the watermark
    opacity: 0.7,
    resizeMode: 'contain',
    marginRight: 25, // Maintain aspect ratio of the image
  },
  scrollViewStyle: {
    backgroundColor: '#343333',
    // padding: 10,
    width: '100%',
  },
  headerStyle: {
    color: '#FF8AD2',
    fontSize: 20, // Adjust the size as needed
    fontWeight: 'underline', // If you want the header to be bold
    marginBottom: 10, // Space after the header
    textDecorationLine: 'underline',

    marginVertical: 10,
    marginLeft: 100, // Adds some vertical margin for spacing
  },
  toggleCameraButton: {
    position: 'absolute',
    bottom: 20, // you can adjust this as needed
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'white', // or any other visible color
    borderRadius: 20,
  },
  toggleCameraButtonText: {
    color: 'black', // or any other color that is visible on the button's background color
    fontSize: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5, // Space between items
  },
  bulletPoint: {
    color: 'white',
    fontSize: 20, // Adjust size as needed
    marginRight: 8, // Adjust spacing as needed
  },
  ideaText: {
    color: 'white',
    fontSize: 16, // Adjust size as needed
  },
  fixedHeaderMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1E1E1E',
    flex: 0.09,
    borderBottomWidth: 2,
    borderBottomColor: '#FF69B4',
    paddingHorizontal: 10, // Added for padding
    marginTop: 10,
  },
  fixedHeaderMessage2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: '',
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    flex: 0.15,
    backgroundColor: '#1B1B1B',
    zIndex: 1,
    marginBottom: 10,
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#FF8AD2',
  },
  iconWrapper: {
    position: 'relative',

    // makes sure children can be positioned absolutely within it
  },

  notificationDot: {
    position: 'absolute', // Absolute position
    top: -5, // adjust these values as per your design needs
    right: -5,
    backgroundColor: 'red', // or any other color
    borderRadius: 10, // makes it circular
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  notificationText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  notificationDot: {
    // Positioning and size adjustments as needed
    position: 'absolute',
    top: -10,
    right: 0,
    width: 22, // Adjust as needed
    height: 22, // Adjust as needed
  },
  videoLabel: {
    position: 'absolute',
    top: 5, // Position from the top, adjust as needed
    left: 5,
    right: 5, // This will stretch the label to the width of the video screen minus 10 (due to left: 5 and right: 5)
    zIndex: 10,
    color: '#000000', // Adjust text color to contrast with the white background
    fontSize: 16,
    textAlign: 'center', // Center the text within the label
    backgroundColor: 'rgba(255,255,255,0.8)', // White with 80% opacity
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10, // Rounded corners
  },
  videoLabel2: {
    position: 'absolute',
    top: 5, // Position from the top, adjust as needed
    left: 5,
    right: 5, // This will stretch the label to the width of the video screen minus 10 (due to left: 5 and right: 5)
    zIndex: 10,
    color: '#000000', // Adjust text color to contrast with the white background
    fontSize: 16,
    textAlign: 'center', // Center the text within the label
    backgroundColor: 'rgba(255,255,255,0.8)', // White with 80% opacity
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10, // Rounded corners
  },
  textOverlayContainer: {
    position: 'absolute', // Absolute position to overlay on the ProgressBar
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'right',
    marginRight: 5,
  },
  centeredTextOverlayContainer: {
    position: 'absolute', // Absolute position to overlay on the ProgressBar
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3B3BB',
    marginVertical: 2, // Separation space from the video elements
    alignSelf: 'center',
    width: '80%', // Adjust width to make it almost as wide as the screen, adjust as per design needs
    borderRadius: 30, // Optional: if you want the edges of this container slightly rounded
    overflow: 'hidden',
    marginLeft: 30,
    marginRight: 30, // To ensure that the ProgressBar doesn't spill out of the rounded container
  },
  progressBarContainer2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
    height: 30, // Height of your ProgressBar
  },
  progressBarContainer3: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B1B1B',
    marginVertical: 1, // Separation space from the video elements
    alignSelf: 'center',
    width: '80%', // Adjust width to make it almost as wide as the screen, adjust as per design needs
    borderRadius: 40, // Optional: if you want the edges of this container slightly rounded
    overflow: 'hidden',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 25,
    marginBottom: 40,
  },
  progressBarContainer4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Added to center children
    backgroundColor: '#3B3B3B', // Corrected color code
    marginVertical: 2,
    alignSelf: 'center',
    width: '80%',
    borderRadius: 30,
    overflow: 'hidden',
    marginLeft: 30,
    marginRight: 30,
  },
  nameDisplay: {
    marginBottom: 8, // Adjust the space between the name and the view
    fontSize: 12, // Adjust font size as needed
    backgroundColor: 'white',
    fontWeight: 'bold', // Optional: if you want the text to be bold
    color: '#000', // Adjust text color as needed
    borderWidth: 1, // Adds a border around the text if desired
    borderColor: '#FF8AD2', // Border color
    borderWidth: 2,
    padding: 4, // Padding inside the border
    borderRadius: 5, // Rounds the corners of the border
    alignSelf: 'stretch', // Ensures the text container stretches to fit content
    textAlign: 'center', // Centers the text within the container
  },
  readOnlyTextInput: {
    flex: 1, // Take up all available space within the container
    textAlign: 'center', // Horizontally center the text
    alignSelf: 'stretch', // Ensure the TextInput stretches to fill the container
    margin: 0, // Remove any margins that may affect centering
    color: 'black', // Set the text color
    // Include any other styling as needed for your design
  },
  readOnlyTextInput2: {
    position: 'absolute', // Position the TextInput absolutely
    width: '100%', // Make it span the entire width of its parent
    textAlign: 'center', // Center the text horizontally
    color: 'black', // Text color
  },
  checkboxIcon: {
    width: 24,
    height: 24,
    // Add additional styling as needed
  },
  overlayContainer: {
    position: 'relative', // Set the overlay container as a relative container
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Ensure the progress bar and the image are centered within
    // backgroundColor:'#17BE59'
  },
  timerImageStyle: {
    width: 105, // Adjust the width as per your image size
    height: 105, // Adjust the height as per your image size
    resizeMode: 'contain', // or 'cover' depending on your needs
    backgroundColor: '#1B1B1B',
  },
  timerImageStyle2: {
    width: 90, // Adjust the width as per your image size
    height: 90, // Adjust the height as per your image size
    resizeMode: 'contain', // or 'cover' depending on your needs
    backgroundColor: '#1B1B1B',
  },
  imageStyle: {
    flex: 1, // Takes up the remaining space
    height: 30,
    resizeMode: 'contain',
  },
  imageStyle2: {
    flex: 1, // Takes up the remaining space
    height: 15,
    resizeMode: 'contain',
  },
  timerTextStyle: {
    position: 'absolute',
    color: 'white', // Adjust the color as needed
    fontSize: 20, // Adjust the font size as needed
    marginTop: 17,
    marginLeft: 32,
  },
  timerTextStyle2: {
    position: 'absolute',
    color: 'white', // Adjust the color as needed
    fontSize: 20, // Adjust the font size as needed
    marginTop: 15,
    marginLeft: 32,
  },
  overlayImage4: {
    position: 'absolute', // Maintain absolute positioning
    width: 30,
    height: 30,
    top: '50%', // Position the top edge of the image in the middle of the container
    left: '50%', // Position the left edge of the image in the middle of the container
    transform: [{translateX: -15}, {translateY: -15}], // Shift the image back by half its width and height to center it
  },
  overlayImage2: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: '65%',
    left: '50%',
    transform: [{translateX: -20}, {translateY: -20}], // These translate values are half the width and height of the GIF.
  },

  lottieContainer: {
    width: 30,
    height: 30,
  },

  progressText: {
    marginLeft: 10,
    color: 'black',
  },
  chatButtonRight: {
    position: 'absolute', // This will take the button out of the normal layout flow
    right: 10,

    top: '50%', // Position at 50% from the top to center it vertically
    transform: [{translateY: -15}], // Adjusts for half the icon's height to truly center it
  },
  expandedBookContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10, // Make sure it's on top of other elements
    backgroundColor: 'rgba(0,0,0,0.8)', // Optional: Add a semi-transparent black background
  },

  logoStyle: {
    width: 250, // or whatever size you desire
    height: 140, // or whatever size you desire
    resizeMode: 'contain', // to maintain aspect ratio
  },
  logoStyle2: {
    width: 150, // or whatever size you desire
    height: 70, // or whatever size you desire
    resizeMode: 'contain',
  },
  logoStyle3: {
    width: 115, // or whatever size you desire
    height: 50, // or whatever size you desire
    resizeMode: 'contain',
    marginTop: 60,
  },
  headlineStyle: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
    marginRight: 205,

    color: '#FFF', // Customize your headline color
  },
  messageLogoStyle: {
    width: 200, // or whatever size you desire
    height: 100, // or whatever size you desire
    resizeMode: 'contain', // to maintain aspect ratio
    marginLeft: 35,
  },
  englishMessageLogoStyle: {
    width: 125, // or whatever size you desire
    height: 100, // or whatever size you desire
    resizeMode: 'contain', // to maintain aspect ratio
  },
  bookLogoStyle: {
    width: 150, // or whatever size you desire
    height: 75, // or whatever size you desire
    resizeMode: 'contain', // to maintain aspect ratio
  },
  logininput: {
    borderWidth: 1,
    width: '90%',
    padding: 8,
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
  },
  loginbutton: {
    backgroundColor: 'green',
    padding: 12,
    marginVertical: 10,
    width: '60%',
    elevation: 1,
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  videoChatContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  loginbuttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  chatheading: {
    // Your existing styles...
  },
  question: {
    color: 'white',
    // Other styling for this text...
  },
  subtext: {
    color: '#FF8AD2',
    // Other styling for this text...
  },
  radioButtonLove: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FF8AD2',
    borderWidth: 2,
    padding: 7, // Same padding
    borderRadius: 0,
  },

  radioButton2: {
    color: 'white',
    marginRight: 5,
  },
  radioButton: {
    width: 120,
    height: 180,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 3,
    marginHorizontal: 10,
    backgroundColor: 'black',
  },
  radioButtonSearch: {
    width: 110,
    height: 150,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 3,
    marginHorizontal: 30,
  },
  mirrored: {
    transform: [
      {scaleX: -1}, // This mirrors the video horizontally
    ],
  },
  selectedRadioButton: {
    width: 160, // Increased width
    height: 220, // Increased height
    borderRadius: 30,
    borderColor: 'white', // Highlight color or any color that indicates selection
    borderWidth: 4, // Optional: Increase border width to make it more noticeable
    // Other styles to indicate it's selected, like a different background color, etc.
  },
  selectedRadioButton2: {
    width: 140, // Increased width
    height: 220, // Increased height
    borderRadius: 30,
    borderColor: '#FF7ECB', // Highlight color or any color that indicates selection
    borderWidth: 4, // Optional: Increase border width to make it more noticeable
    // Other styles to indicate it's selected, like a different background color, etc.
  },
  selectedRadioButtonSmall: {
    width: 120, // Increased width
    height: 170, // Increased height
    borderRadius: 30,
    borderColor: '#FF7ECB', // Highlight color or any color that indicates selection
    borderWidth: 4,
    marginTop: 20, // Optional: Increase border width to make it more noticeable
    // Other styles to indicate it's selected, like a different background color, etc.
  },
  radioButtonWhite: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 2,
    marginHorizontal: 5,
    color: 'white',
  },
  selected: {
    backgroundColor: 'blue',
    borderColor: 'blue',
  },

  loginBodytext: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  loginBodytext2: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
  },
  loginBodytext3: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    padding: 2,
  },
  roundedButtonNew: {
    height: 50,
    width: mvs(288),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 25, // this makes it rounded
    backgroundColor: 'black', // black background color for the button
    borderWidth: 2, // white border width
    borderColor: 'white', // white border color
    marginHorizontal: 50,
    marginVertical: 10,
  },
  loginIssue: {
    color: 'white',
    textAlign: 'center',
    fontSize: mvs(12),
    lineHeight: mvs(18),
    marginTop: mvs(21),
    fontFamily: 'Poppins-Regular',
    marginBottom: mvs(40),
  },
  nichtbinarButton: {
    textAlign: 'center', // Center the text horizontally
    lineHeight: 20, // Adjust the line height to create space for the new line
    color: 'white', // Text color
    fontSize: 16, // Adjust the font size as needed
  },
  buttonPinkText: {
    textAlign: 'center', // Center the text horizontally within the button
    color: '#FF8AD2', // #FF8AD2 font color
    fontSize: mvs(19),
    lineHeight: mvs(28.5), // you can adjust the font size as desired
    textShadowColor: 'rgba(255, 0, 255, 0.8)', // pinkish glow color (adjust as desired)
    textShadowOffset: {width: 0, height: 0}, // no offset
    textShadowRadius: 10, // adjust the radius for the glow effect
    fontFamily: 'Poppins-SemiBold',
  },
  roundedButton2: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, // this makes it rounded
    backgroundColor: '#FF7ECB', // a blue background color for the button, you can adjust as desired
    marginHorizontal: 50,
    marginVertical: 10,
  },
  roundedButton: {
    width: 250,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, // this makes it rounded
    backgroundColor: '#FF7ECB', // a blue background color for the button, you can adjust as desired
    marginHorizontal: 50,
    marginVertical: 10,
  },
  roundedButtonGender: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, // this makes it rounded
    backgroundColor: '#FF8AD2', // a blue background color for the button, you can adjust as desired
    marginHorizontal: 50,
    marginVertical: 10,
  },
  imageStyleBack: {
    width: '100%',
    height: '100%',
  },
  hyperlinkText2: {
    color: '#FF7ECB',
    textDecorationLine: 'underline',
  },
  hyperlinkText: {
    color: 'white', // Typical hyperlink color
    textDecorationLine: 'underline',
    marginTop: 10, // Optional: To give some space from the icon-text view
  },
  iconStyle: {
    width: 24, // or whatever size you want
    height: 24, // same as width for square icon, adjust as needed
    marginRight: 10, // spacing between icon and text
    resizeMode: 'contain',
  },
  iconStyle2: {
    width: 24, // or whatever size you want
    height: 40, // same as width for square icon, adjust as needed
    marginRight: 10, // spacing between icon and text
  },
  iconStyle3: {
    width: 60, // or whatever size you want
    height: 40, // same as width for square icon, adjust as needed
    marginRight: 15, // spacing between icon and text
  },
  iconStyle4: {
    width: 30, // Specify a fixed width
    height: 30, // Specify a fixed height
    resizeMode: 'contain',
    marginRight: 5,
  },
  iconStyle4IncreasedMargin: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
    marginTop: 25, // Increased space when not showing timers
  },
  iconStyle6: {
    width: 22, // Specify a fixed width
    height: 22, // Specify a fixed height
    resizeMode: 'contain',
    marginLeft: 8,
  },
  iconStyle10: {
    width: 15, // Specify a fixed width
    height: 15, // Specify a fixed height
    resizeMode: 'contain',
    marginLeft: 10,
  },
  iconStyle16: {
    width: 13, // Specify a fixed width
    height: 13, // Specify a fixed height
    resizeMode: 'contain',
    marginLeft: 10,
  },
  iconStyle5: {
    width: 22, // Specify a fixed width
    height: 22, // Specify a fixed height
    resizeMode: 'contain',
    marginLeft: 6,
    marginTop: -8,
    marginBottom: 6,
  },
  iconStyle8: {
    width: 26, // Specify a fixed width
    height: 26, // Specify a fixed height
    resizeMode: 'contain',
    marginLeft: 6,
  },
  iconStyle15: {
    width: 40, // or whatever size you want
    height: 40,
    marginLeft: 10, // same as width for square icon, adjust as needed
    // spacing between icon and text
  },
  heartIconContainer: {
    // Positioning the container to the far right
    justifyContent: 'flex-end',
    flex: 0.1, // Adjust this flex value as needed
    marginRight: 10,
  },

  imageStyle1: {
    width: width * 0.4, // 50% of screen width
    height: height * 0.3, // 30% of screen height
  },
  imageStyle2: {
    width: width * 0.4, // Specify a fixed width
    height: height * 0.3, // Specify a fixed height
    resizeMode: 'contain',
  },
  selectedImageStyle: {
    width: width * 0.5, // 60% of screen width, for instance
    height: height * 0.4, // 40% of screen height
    borderColor: 'blue', // Highlight with a border
    borderWidth: 2,
    marginRight: 15, // Increase the margin a bit if you want
  },
  stopwatchOverlay: {
    position: 'absolute',
    top: 0, // Adjust as needed
    left: 0, // Adjust as needed
    // Other styling as needed
  },
  iconImage: {
    width: 30, // Width of the image
    height: 30, // Height of the image
    resizeMode: 'contain', // To ensure the image fits without distortion
  },
  contentArea: {
    flex: 1, // Take up all available space above the footer
  },
  infoRow: {
    flexDirection: 'row', // To display items side by side
    justifyContent: 'space-between',
    alignItems: 'center', // To vertically align items in the middle
    padding: 5, // To give some space around each row
    borderBottomWidth: 1, // To create a line below each row
    borderBottomColor: '#FF8AD2',
    borderStyle: 'dotted',
    width: '94%',
  },
  infoRow3: {
    flexDirection: 'row', // To display items side by side
    justifyContent: 'space-between',
    alignItems: 'center', // To vertically align items in the middle
    padding: 5, // To give some space around each row
    borderBottomWidth: 1, // To create a line below each row
    borderBottomColor: '#FF8AD2',
    borderStyle: 'dotted',
    width: '100%',
  },
  rowIconStyle: {
    width: 20, // Adjust the width as needed
    height: 20, // Adjust the height as needed
    marginRight: 5, // Add some space between the icon and the text
    resizeMode: 'contain', // Ensure the image aspect ratio is maintained
  },
  infoRow2: {
    flexDirection: 'row', // To display items side by side
    justifyContent: 'space-between', // To place the items on opposite ends
    alignItems: 'center', // To vertically align items in the middle
    padding: 5, // To give some space around each row
    borderBottomWidth: 1, // To create a line below each row
    borderBottomColor: '#FF8AD2',
    borderStyle: 'dotted',
    width: '94%',
  },
  profileDetailWord: {
    fontWeight: 'bold', // To give the word a bold appearance
    fontSize: 16, // Font size of the word
    color: 'white',
    marginRight: 40,
    // Color of the word text
  },
  profileDetailDescription: {
    fontSize: 16, // Font size of the description
    color: 'lightgray',
    flex: 1, // This will allow the description to take up the remaining space
    textAlign: 'right', // Aligns text to the right
  },
  extendedSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  extendedText: {
    color: 'white',
    marginBottom: 20,
  },
  extendedImage: {
    width: windowWidth * 0.25, // 30% of the window width
    height: windowWidth * 0.25, // keep the height the same to maintain the aspect ratio
    resizeMode: 'contain', // Ensure the whole image fits within the dimensions and aspect ratio is maintained
    marginLeft: 8,
  },
  extendedImage2: {
    width: windowWidth * 0.25, // 30% of the window width
    height: windowWidth * 0.25, // keep the height the same to maintain the aspect ratio
    resizeMode: 'contain', // Ensure the whole image fits within the dimensions and aspect ratio is maintained
    marginLeft: 20,
  },
  extendedImage3: {
    width: windowWidth * 0.29, // 30% of the window width
    height: 200, // keep the height the same to maintain the aspect ratio
    marginLeft: 10,
  },
  extendedImage4: {
    width: windowWidth * 0.25, // 30% of the window width
    height: windowWidth * 0.25, // keep the height the same to maintain the aspect ratio
    resizeMode: 'contain', // Ensure the whole image fits within the dimensions and aspect ratio is maintained
    marginLeft: 25,
    marginTop: 15,
  },

  videoCameraStyle: {
    width: '100%', // This will make sure to cover the calculated width
    height: '100%', // This will make sure to cover the calculated height, maintaining aspect ratio
  },
  extendedImage5: {
    width: windowWidth * 0.25, // 30% of the window width
    height: windowWidth * 0.25, // keep the height the same to maintain the aspect ratio
    resizeMode: 'contain', // Ensure the whole image fits within the dimensions and aspect ratio is maintained
    marginLeft: 130,
    marginTop: 15,
  },
  extendedImage6: {
    width: windowWidth * 0.27, // 30% of the window width
    height: 150, // keep the height the same to maintain the aspect ratio
    marginLeft: 10,
  },
  extendedImage7: {
    width: windowWidth * 0.27, // 30% of the window width
    height: 150, // keep the height the same to maintain the aspect ratio
    marginLeft: 10,
  },
  extendedList: {
    width: '100%',
    backgroundColor: '#FC427B',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  listText: {
    color: 'white',
  },
  iconTextView: {
    marginRight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  iconTextView2: {
    marginRight: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconTextView3: {
    marginTop: mvs(40),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconTextView4: {
    marginRight: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  longText: {
    color: '#FF69B4', // Change text color for long text
  },
  iconTextView5: {
    marginTop: 5,

    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 160,
  },

  iconTextView6: {
    marginRight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    flexWrap: 'wrap',
  },
  textFirstLine: {
    flexShrink: 1, // Allow the text to shrink and break onto the next line
  },
  textSecondLine: {
    color: 'pink', // Apply different color or style
    fontSize: 14, // Keep font size consistent with the first line
    marginLeft: 30, // Start at the beginning of the line; adjust as needed
    // width: '100%', // You might not need this if you control the alignment with marginLeft
  },

  iconText: {
    fontSize: mvs(12),
    lineHeight: mvs(18),
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  ageContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: mvs(24),
  },
  age: {
    color: '#FF8AD2',
    marginTop: mvs(6),
    fontSize: mvs(20),
    lineHeight: mvs(30),
    fontFamily: 'Poppins-SemiBold',
  },
  agetitle: {
    color: '#FFF',
    marginTop: mvs(4),
    fontSize: mvs(12),
    lineHeight: mvs(18),
    fontFamily: 'Poppins-Regular',
  },
  iconText2: {
    fontSize: 13,

    color: '#F9E3B5',
  },
  buttonIcon: {
    marginRight: 8, // Adjust the space between the icon and the text
    width: 20, // Adjust based on your icon's size
    height: 20, // Adjust based on your icon's size
  },
  roundedButtonIcon: {
    flexDirection: 'row', // to align icon and text side by side
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
    marginVertical: 10,
    alignSelf: 'stretch', // make sure it stretches horizontally
    paddingHorizontal: 15, // optional: if you want some spacing inside the button
  },
  roundedButtonIcon2: {
    flexDirection: 'row', // to align icon and text side by side
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    marginVertical: 10,
    alignSelf: 'stretch', // make sure it stretches horizontally
    paddingHorizontal: 80, // optional: if you want some spacing inside the button
  },
  iconContainer: {
    flexDirection: 'row', // Horizontal layout
    alignItems: 'center', // Center the items vertically
  },
  roundedButtonWhite: {
    width: mvs(250),
    height: mvs(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: mvs(20), // this makes it rounded
    backgroundColor: 'white', // a blue background color for the button, you can adjust as desired
    marginHorizontal: 50,
	  marginBottom: mvs(40),
	  alignSelf: 'center',
    //marginVertical: 10,
    iconContainer: {
      flexDirection: 'row', // Horizontal layout
      alignItems: 'center', // Center the items vertically
    },
  },
  roundedButtonWhiteSmall: {
    width: 190,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, // this makes it rounded
    backgroundColor: 'white', // a blue background color for the button, you can adjust as desired
    marginHorizontal: 50,
    marginVertical: 10,
    borderColor: '#FF7ECB',
    borderWidth: 3,
    iconContainer: {
      flexDirection: 'row', // Horizontal layout
      alignItems: 'center', // Center the items vertically
    },
  },
  roundedButtonWhiteSmall2: {
    width: 190,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, // this makes it rounded
    backgroundColor: 'white', // a blue background color for the button, you can adjust as desired
    marginHorizontal: 50,
    marginVertical: 10,
    borderColor: '#FF7ECB',
    borderWidth: 3,
    iconContainer: {
      flexDirection: 'row', // Horizontal layout
      alignItems: 'center', // Center the items vertically
    },
  },
  wrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1, // Adjust as needed
    borderBottomColor: 'white', // Set to your input's underline color
    margin: 10,

    width: '80%', // Adjust based on your layout
  },
  iconInsideInput: {
    padding: 10,
    marginRight: 5,
    resizeMode: 'contain', // Space between the icon and the input text
  },
  selectedRadioButtonLove: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FF8AD2',
    backgroundColor: '#FFF0F8',
    borderColor: '#FF8AD2',
    borderWidth: 1,
    padding: 10, // Consistent padding
  },
  smallerSelectedRadioButtonLove: {
    // ... similar to selectedRadioButtonLove but with less padding or a smaller flex value ...
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FF8AD2',
    borderWidth: 2,
    padding: 10, // Consistent padding as selectedRadioButtonLove
    borderRadius: 0,
  },
  roundedButtonWhiteSmall2: {
    width: 170,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, // this makes it rounded
    backgroundColor: 'white', // a blue background color for the button, you can adjust as desired

    marginVertical: 10,
    borderColor: '#FF8AD2',
    borderWidth: 2,
    iconContainer: {
      flexDirection: 'row', // Horizontal layout
      alignItems: 'center', // Center the items vertically
    },
  },
  roundedButtonWhiteSmall3: {
    width: 220,
    height: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 25, // this makes it rounded
    backgroundColor: 'white', // a blue background color for the button, you can adjust as desired
    marginLeft: 15,
    marginVertical: 10,
    flexDirection: 'row',
    iconContainer: {
      flexDirection: 'row', // Horizontal layout
      alignItems: 'center', // Center the items vertically
    },
  },
  roundedButtonWhiteSelf: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, // this makes it rounded
    backgroundColor: 'white', // a blue background color for the button, you can adjust as desired
    marginHorizontal: 50,
    marginVertical: 10,
    alignSelf: 'center',
    iconContainer: {
      flexDirection: 'row', // Horizontal layout
      alignItems: 'center', // Center the items vertically
    },
  },
  roundedButtonWhiteSelf2: {
    width: 200,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, // this makes it rounded
    backgroundColor: 'white', // a blue background color for the button, you can adjust as desired
    marginHorizontal: 50,
    marginVertical: 10,
    alignSelf: 'center',
    iconContainer: {
      flexDirection: 'row', // Horizontal layout
      alignItems: 'center', // Center the items vertically
    },
  },
  roundedButtonForNichtbinar: {
    width: 250,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40, // this makes it rounded
    backgroundColor: 'white', // a blue background color for the button, you can adjust as desired
    marginHorizontal: 50,
    marginVertical: 10,
  },
  roundedButtonWithNewLine: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, // this makes it rounded
    backgroundColor: 'white', // a blue background color for the button, you can adjust as desired
    marginHorizontal: 50,
    marginVertical: 10,
  },
  buttonTextLine1: {
    fontSize: 16,
    color: 'black',
  },
  buttonTextLine2: {
    fontSize: 12, // Adjust the font size as needed
    color: 'black', // Text color
  },
  buttonTextLine3: {
    fontSize: 12, // Adjust the font size as needed
    color: 'black',
    marginLeft: 20,
  },
  roundedButtonWhiteBig: {
    width: 280,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, // this makes it rounded
    backgroundColor: 'white', // a blue background color for the button, you can adjust as desired
    marginHorizontal: 50,
    marginVertical: 10,
  },
  roundedButtonWhiteStretch: {
    height: 50,
    width: mvs(310),
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'white',
    marginHorizontal: 50,
    marginVertical: 10,
    alignSelf: 'center',
  },
  roundedButtonWhiteStretch2: {
    height: (windowHeight * buttonHeightPercentage) / 100, // Calculate the height based on a percentage of the screen height
    justifyContent: 'center',
    alignItems: 'stretch', // Stretch the content horizontally
    borderRadius: (windowHeight * buttonHeightPercentage) / 200, // Calculate the borderRadius based on half of the calculated height
    backgroundColor: 'white',
    marginHorizontal: windowWidth * 0.1, // Adjust the horizontal margin based on a percentage of the screen width
    marginVertical: windowHeight * 0.02, // Adjust the vertical margin based on a percentage of the screen height
  },
  buttonText: {
    textAlign: 'center', // Center the text horizontally within the button
    color: 'black',
    fontSize: mvs(19),
    lineHeight: mvs(28.5),
    fontFamily: 'Poppins-SemiBold',
  },
  buttonTextClick: {
    color: '#fff', // White color text
    //fontFamily: 'PixelFontFamily', // Replace with your actual pixel font family
    fontSize: 16, // Adjust as needed
    textShadowColor: 'rgba(0, 255, 0, 0.8)', // Shiny green color
    textShadowOffset: {width: 20, height: 20},
    textShadowRadius: 10, // Adjust the radius to control the spread of the shadow
    textAlign: 'center', // Center the text
    // Include other styling as needed
  },
  buttonTextRed: {
    color: '#fff', // White color text
    //fontFamily: 'PixelFontFamily', // Replace with your actual pixel font family
    fontSize: 16, // Adjust as needed
    textShadowColor: 'rgba(255,0, 0, 0.8)', // Shiny green color
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 10, // Adjust the radius to control the spread of the shadow
    textAlign: 'center', // Center the text
    // Include other styling as needed
  },
  buttonTextPink: {
    color: '#FF7ECB',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonTextWhite: {
    textAlign: 'center', // Center the text horizontally within the button
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonTextWhiteSmall: {
    textAlign: 'center', // Center the text horizontally within the button
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },
  menuOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    color: '#FF8AD2',
  },
  chatscreenVideo: {
    flex: 1,
  },
  videoChatContainer2: {
    flex: 1,
  },
  camera2: {
    flex: 1,
  },
  horizontalFooBar: {
    position: 'relative',
    bottom: 0,
    marginLeft: -5,
    width: '110%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1B1B1B',
  },
  horizontalFooBar2: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1B1B1B',
  },
  horizontalFooBar3: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1B1B1B',
    marginBottom: 5,
  },
  footerBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000000',
    padding: 16,
  },
  footerBar2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white', // Grey background
    borderWidth: 3,
    borderColor: '#FF69B4',
    borderRadius: 30, // Adjust for rounded corners if desired
    borderTopColor: '#FF69B4',
    marginLeft: 10,
    marginRight: 8,
    width: '100%', // Pink border
  },
  bookContainer: {
    padding: 1,
    backgroundColor: 'white',
    maxWidth: '100%', // Adjust the width as necessary,
  },
  bookContainer4: {
    padding: 1,
    borderRadius: 25,
    backgroundColor: 'white',
    maxWidth: '80%',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#FF8AD2',
    borderWidth: 4,
    flexDirection: 'row', // Added for horizontal layout
    justifyContent: 'space-between', // Space out children
    alignItems: 'center', // Align children vertically
  },
  smallBookContainer2: {
    padding: 1,
    borderRadius: 15,
    backgroundColor: 'white',
    maxWidth: '90%',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
    marginBottom: 10,
    borderColor: '#FF8AD2',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookContainer3: {
    padding: 1,
    borderRadius: 25,
    backgroundColor: 'white',
    maxWidth: '100%',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 10,
    borderColor: '#FF8AD2',
    borderWidth: 4,
    flexDirection: 'row', // Added for horizontal layout
    justifyContent: 'space-between', // Space out children
    alignItems: 'center', // Align children vertically
  },
  bookContainer2: {
    padding: 1,
    borderRadius: 25,
    backgroundColor: 'white',
    maxWidth: '100%',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 10,
    borderColor: '#FF8AD2',
    borderWidth: 4,
    flexDirection: 'row', // Added for horizontal layout
    justifyContent: 'space-between', // Space out children
    alignItems: 'center', // Align children vertically
  },
  borderL: {
    borderTopColor: '#FF69B4',
    borderWidth: 2,
    marginTop: 2,
    backgroundColor: '#1B1B1B',
  },
  profilePicture4: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginTop: -10,
  },
  roundButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffc0cb',
    justifyContent: 'center',
    alignItems: 'center',
    top: 1, // Adjust for shadow effect
  },
  roundButton2: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth and borderColor can be added here if you want an inset shadow effect
  },
  innerShadow: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust opacity for shadow effect
    justifyContent: 'center',
    alignItems: 'center',
  },

  roundButtonGradient: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8, // Android shadow
  },
  footerIconBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: 'black',
  },
  horizontalContainer: {
    flexDirection: 'row', // arrange children views horizontally
    justifyContent: 'space-between', // separate child views
    alignItems: 'center', // center children vertically
    width: '100%', // take full width of the parent container
  },
  fullImage: {
    width: null, // Reset any specific width
    height: null, // Reset any specific height
    resizeMode: 'contain', // or 'cover' to maintain aspect ratio without stretching,
    marginTop: 0, // Ensure there's no top margin
  },
  inputEmail2: {
    borderBottomColor: 'white',
    paddingHorizontal: 24,

    borderTopColor: '#1B1B1B',
    borderLeftColor: '#1B1B1B',
    borderRightColor: '#1B1B1B',
    borderWidth: 2,
    width: 300,
    padding: 8,
    borderRadius: 2,
    backgroundColor: 'transparent', // Set your desired background color here
    color: '#FF69B4', // Set your desired text color here
    // Add any other style properties you want
  },
  inputEmail3: {
    borderBottomColor: '#1B1B1B',
    paddingHorizontal: 24,
    borderStyle: 'solid',
    borderTopColor: '#1B1B1B',
    borderLeftColor: '#1B1B1B',
    borderRightColor: '#1B1B1B',
    borderBottomColo: '#1B1B1B',
    width: 300,
    padding: 8,

    backgroundColor: 'transparent', // Set your desired background color here
    color: '#FF69B4', // Set your desired text color here
    // Add any other style properties you want
  },
  inputEmail: {
    borderBottomColor: 'white',
    paddingHorizontal: 24,
    marginLeft: 27,
    borderTopColor: '#1B1B1B',
    borderLeftColor: '#1B1B1B',
    borderRightColor: '#1B1B1B',
    borderWidth: 2,
    width: 300,
    padding: 8,
    borderRadius: 2,
    backgroundColor: 'transparent', // Set your desired background color here
    color: '#FF7ECB', // Set your desired text color here
    // Add any other style properties you want
  },
  inputEmail3: {
    borderBottomColor: 'white',
    paddingHorizontal: 24,
    marginLeft: 27,
    borderTopColor: '#1B1B1B',
    borderLeftColor: '#1B1B1B',
    borderRightColor: '#1B1B1B',
    borderWidth: 3,
    width: 300,
    padding: 8,
    borderRadius: 2,
    backgroundColor: 'transparent', // Set your desired background color here
    color: '#FF7ECB', // Set your desired text color here
    // Add any other style properties you want
  },
  inputOrigin: {
    borderBottomColor: 'black',
    paddingHorizontal: 24,
    marginLeft: 10,
    borderColor: 'black',
    borderWidth: 2,
    width: 300,
    padding: 8,
    borderBottomWidth: 2,
    backgroundColor: 'transparent',
    color: 'black',
  },
  inputName: {
    borderBottomColor: 'white',
    paddingHorizontal: 24,
    marginLeft: 10,

    borderWidth: 2,
    width: 300,
    padding: 8,
    borderRadius: 2,
    backgroundColor: 'transparent', // Set your desired background color here
    color: '#FF8AD2', // Set your desired text color here
    // Add any other style properties you want
  },
  inputName2: {
    borderTopColor: '#1B1B1B',
    borderLeftColor: '#1B1B1B',
    borderRightColor: '#1B1B1B',
    borderBottomColor: 'white',
    paddingHorizontal: 24,

    borderWidth: 2,
    width: 300,
    padding: 8,
    borderRadius: 2,
    backgroundColor: 'transparent', // Set your desired background color here
    color: '#FF7ECB', // Set your desired text color here
    // Add any other style properties you want
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  selectedEmail: {
    color: '#00f',
    padding: 8,
    backgroundColor: '#f0f0f0',
    marginBottom: 5,
  },
  selectedElement: {
    color: 'black',
    padding: 8,
    backgroundColor: '#FF7ECB',
    marginBottom: 5,
    borderRadius: 30,
    fontWeight: 'bold',
    marginLeft: 50,
  },
  selectedElement2: {
    color: 'black',
    padding: 8,
    backgroundColor: 'pink',
    marginBottom: 5,
    borderRadius: 30,
    fontWeight: 'bold',
    marginLeft: 50,
  },
  selectedElementPopup: {
    color: 'black',
    padding: 8,
    backgroundColor: '#FF7ECB',
    marginBottom: 5,
    borderRadius: 30,
  },
  selectedSuggestion: {
    backgroundColor: '#ddd',
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 0, // Optional: to give space between items
    marginTop: 0,
  },
  languageContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 3, // Optional: to give space between items
    marginTop: 3,
  },
  languageContainerPopup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginRight: 15,
    marginLeft: 30,
    color: 'black',
  },
  keyboardOpenStyle: {
    marginBottom: 28, // additional margin when keyboard is open
  },
  fullWidthImage: {
    width: '94%', // Take up all the width available
    height: 60,
    resizeMode: 'stretch',
    marginTop: 9, // Cover the width, may clip the height
    marginLeft: 18,
  },

  fullWidthImage2: {
    width: '94%', // Take up all the width available
    // height: windowHeight * (20 / 100),
    height: 125,
    resizeMode: 'stretch',
    marginTop: 9,
    marginLeft: 18,
  },
  suggestionText: {
    color: 'black', // Set text color to black or any desired color
    fontSize: 16, // Adjust the font size as needed
  },
  suggestionText2: {
    color: '#FF8AD2',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  allowButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  disallowButton: {
    backgroundColor: '#f44336',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  listIcon2: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1, // Keeping the width and height the same for square icons
    marginRight: 10,
    resizeMode: 'contain',
  },
  borderContainer: {
    flex: 0.3,
    borderColor: 'white', // Choose the border color you like
    borderWidth: 1, // Choose the border width you like
    borderRadius: 40, // Rounded corners
    borderColor: '#FF8AD2',
    borderWidth: 3,
    margin: 3, // Optional: margin around the container
    padding: 3, // Optional: padding for the list inside the container
    backgroundColor: 'white',
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    marginLeft: 30,
    marginRight: 30,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  containerProfile: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#FF8AD2',
    flexGrow: 0,
    flexShrink: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  containerProfile2: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#FF8AD2',
    flexGrow: 0,
    flexShrink: 1,
    width: '105%',
    backgroundColor: 'transparent',
    marginTop: -48,
    backgroundColor: 'black',
  },
  mainContent: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    // Any other styles you might need for the main content section
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  leftContainer2: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 10,
  },
  editIcon: {
    position: 'absolute', // Absolute positioning to overlay the edit icon on the image
    top: 65,
    width: 22,
    height: 22,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional background for better icon visibility
    borderRadius: 15, // Rounded background
    padding: 2,
  },
  firstImageEditIcon: {
    position: 'absolute',
    bottom: 0, // Position it lower than the standard editIcon
    right: 2,
    width: 22,
    height: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
    padding: 2,
  },
  containerInputStyle: {
    borderBottomWidth: 1,
    borderColor: 'white',
    width: 40,
    height: 50,
    marginLeft: 10,
  },
  inputSMSStyle: {
    borderBottomWidth: 1,
    borderColor: 'white',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: 'transparent',
    color: '#FF8AD2',
    width: 40,
    height: 50,
    fontSize: 24,
    textAlign: 'center',
    flex: 1,
    marginLeft: 10,
  },
  inputSMSStyle2: {
    borderBottomWidth: 1,
    borderColor: 'white',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: 'transparent',
    color: '#FF8AD2',
    width: 80,
    height: 50,
    fontSize: 24,
    textAlign: 'center',
    flex: 1,
    marginLeft: 10,
  },
  inputSMS: {
    fontSize: 100,
    textAlign: 'center',
    margin: 16,
    padding: 8,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    width: '100%',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeInput: {
    width: 40,
    height: 60,
    fontSize: 24,
    textAlign: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginHorizontal: 5,
    color: 'white',
    backgroundColor: 'transparent',
  },
  placeholder: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 100,
    textAlign: 'center',
    color: 'white',
  },
  placeholderActive: {
    opacity: 0, // hide placeholder when text is present
  },
  placeholderInactive: {
    opacity: 1, // show placeholder when text is absent
  },
  textPresent: {
    color: 'black', // or any color when text is present
  },
  textAbsent: {
    color: 'transparent', // make text transparent when no text is entered yet
  },
  contentContainer: {
    width: '100%',
    flex: 1, // Take up all available space
    //marginTop: 60,
  },

  contentContainer2: {
    marginTop: 60,
  },
  circularProgressContainer: {
    flex: 1,
    alignItems: 'flex-end', // Align the CircularProgress to the end (right)
    transform: [{scale: 0.5}],
  },
  contentContainer3: {
    // paddingBottom: 50,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  circularProgressContainer: {
    flex: 1,
    alignItems: 'flex-end', // Align the CircularProgress to the end (right)
    transform: [{scale: 0.5}],
  },

  backButton: {
    alignItems: 'flex-start',
  },
  backButtonLeft: {
    paddingHorizontal: 10,
    width: 50, // Set a fixed width. Adjust as necessary.
    height: 50, // Set a fixed height. Adjust as necessary.
    alignItems: 'flex-start',
    justifyContent: 'center', // This will vertically center the icon
    paddingLeft: 10, // Add some padding if needed
  },
  textField: {
    margin: 10,
    fontSize: 18,
    // Add additional styles
  },
  phoneInput: {
    margin: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    // Add additional styles
  },

  footerIconBarTransparent: {
    position: 'absolute', // This will take the footer out of the normal layout flow
    bottom: 0, // This will position the footer at the bottom
    left: 0,
    right: 0,
    height: 70, // Fixed height for the footer bar
    flexDirection: 'column', // Changed to 'column' to align items vertically
    justifyContent: 'center', // Align items vertically centered
    alignItems: 'center', // Align items horizontally centered
    backgroundColor: 'transparent', // Background is set to transparent

    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  iconButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    height: '100%', // ensures the button takes the full height of the footer bar
  },
  iconLabel: {
    marginTop: 3,
    fontSize: 12,
    color: 'white',
  },
  iconLabelSelected: {
    marginTop: 3,
    fontSize: 12,
    color: '#FF7ECB',
  },
  chatscreen2: {
    backgroundColor: '#1B1B1B',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatscreen3: {
    backgroundColor: '#1B1B1B',
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  chatscreen4: {
    backgroundColor: '#1B1B1B',
    flex: 1,
    width: '100%',
    alignItems: 'flex-start', // Align items to the left
    justifyContent: 'flex-start', // Align items to the top
    padding: 0,
    margin: 0,
  },
  chatscreen: {
    backgroundColor: '#1B1B1B',
    flex: 1,
    width: '100%', // Ensure this is 100%
    alignItems: 'stretch', // Make sure this is 'stretch' or remove
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
  contentContainer: {
    flex: 1,
    //marginBottom: 60,
  },
  fixedFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  chatheading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  chattopContainer: {
    backgroundColor: '#F7F7F7',
    height: 70,
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    marginBottom: 15,
    elevation: 2,
  },

  chatheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chatlistContainer: {
    paddingHorizontal: 10,
  },
  chatemptyContainer: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatemptyText: {fontWeight: 'bold', fontSize: 24, paddingBottom: 30},
  messagingscreen: {
    flex: 1,
  },
  messaginginputContainer: {
    width: '100%',
    minHeight: 100,
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  messaginginput: {
    borderWidth: 1,
    padding: 15,
    flex: 1,
    marginRight: 10,
    borderRadius: 20,
  },
  buttonContainer: {
    backgroundColor: '#1B1B1B',
  },
  buttonContainer2: {
    backgroundColor: 'white', // Set the background color to white
    padding: 4, // Adjust the padding as needed
    borderRadius: 18, // Add rounded corners for a button-like appearance
    marginVertical: 4, // Add margin to separate items
    marginHorizontal: 5,
    height: 40,
    marginTop: 5,
  },
  messagingbuttonContainer: {
    width: '30%',
    backgroundColor: 'green',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  modalbutton: {
    width: '40%',
    height: 45,
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  modalbuttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modaltext: {
    color: '#fff',
  },
  modalContainer: {
    width: '100%',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    elevation: 1,
    height: 400,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  modalinput: {
    borderWidth: 2,
    padding: 15,
  },
  modalsubheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  mmessageWrapper: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  mmessage: {
    maxWidth: '50%',
    backgroundColor: '#f5ccc2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 2,
  },
  mvatar: {
    marginRight: 5,
  },
  cchat: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: '#000',
    height: 80,
    marginBottom: 10,
  },
  cavatar: {
    marginRight: 15,
  },
  cusername: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  cmessage: {
    fontSize: 14,
    opacity: 0.7,
  },
  crightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  ctime: {
    opacity: 0.5,
  },
  radioButton7: {
    width: '30%', // Setting a width to make sure all radio buttons have the same size
    padding: 10, // Internal padding for the button for a comfortable spacing
    borderRadius: 20, // Round corners as specified
    borderWidth: 2, // A border for visual emphasis
    borderColor: '#FF8AD2', // Pink border as specified
    justifyContent: 'center', // Center child elements vertically
    alignItems: 'center', // Center child elements horizontally
    margin: 5, // Space between radio buttons
    backgroundColor: 'transparent', // Background color set to transparent by default
  },
  selected: {
    backgroundColor: '#FF8AD2', // Pink background when selected
  },
  radioButtonsContainer: {
    flexDirection: 'row', // Arrange radio buttons in a row
    justifyContent: 'space-around', // Space them out evenly
    alignItems: 'center', // Vertically center
    marginTop: 50, // Margin from the previous component or top of the parent
    marginLeft: 3,
    marginRight: 3,
  },
  radioButtonsContainerLove: {
    flexDirection: 'row',
  },
  radioButtonsContainerLove2: {
    flexDirection: 'row',
    marginRight: 120,
    marginTop: 5,
  },
  radioButtonsContainerLove3: {
    flexDirection: 'row',

    marginTop: 5,
  },
  statusBarContainer: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 2, // Only vertical padding
    borderBottomColor: '#FF8AD2',
    borderWidth: 1,
    width: '100%', // Full width
    marginHorizontal: 0, // No horizontal margin
  },

  statusBarText: {
    fontSize: 16,
    color: '#FF8AD2',
    // Add additional styling as needed
  },
  trashCanIcon: {
    width: 24,
    height: 24,
    marginLeft: 18,
    // Add additional styling as needed
  },
  heartIconStyle: {
    width: 80,
    height: 80,
  },
  textFieldContainer: {
    borderColor: '#FF69B4',
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
  },
  centeredText: {
    marginTop: 15,
    color: '#FF69B4',
    textAlign: 'center',
    width: '100%', // Stretching it horizontally to fit the full width.
    flex: 1,
  },
  centeredText2: {
    marginTop: 15,
    color: 'white',
    textAlign: 'center',
    width: '100%', // Stretching it horizontally to fit the full width.
    flex: 1,
  },
  enumerationItem: {
    color: 'white',
    marginBottom: 5,
  },
  root: {
    minHeight: mvs(60),
    //borderColor: 'red',
    marginTop: mvs(10),
  },
  codeFieldRoot: {marginTop: 20, justifyContent: 'center'},
  cellRoot: {
    width: 30,
    height: 36,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginHorizontal: mvs(6),
    position: 'relative', // Allows absolute positioning of separators
    borderColor: '#FFF',
  },
  cellText: {
    color: '#FF8AD2',
    fontSize: mvs(24),
    textAlign: 'center',
    lineHeight: mvs(36),
    fontFamily: 'Poppins-Regular',
  },
  separator: {
    position: 'absolute',
    right: -mvs(16),
    fontSize: mvs(38),
    fontWeight: 'bold',
    //lineHeight: mvs(36),
    color: '#FF8AD2',
    bottom: -mvs(6),
    transform: [{rotateY: '60deg'}],
  },
  otpInfo: {
	color: 'white',
    fontSize: mvs(14),
	lineHeight: mvs(21),
    //marginTop: mvs(10),
    textAlign: 'center',
	fontFamily: 'Poppins-Medium'
  },
  securityInfoContainer: {
	flexDirection:'row',
	alignItems:'center',
	gap: mvs(15),
	alignSelf:'center',
	marginVertical: mvs(12)
  },
  securityInfo: {
	color: 'white',
    fontSize: mvs(12),
    lineHeight: mvs(18),
    fontFamily: 'Poppins-Medium'
  },
  headerContainer: {
	height: mvs(120), 
	justifyContent:'center',
  //backgroundColor:'red'
}
});

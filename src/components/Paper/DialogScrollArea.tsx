import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Dialog, Portal, Text } from 'react-native-paper';

const DialogScrollArea = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <View>
      <Button onPress={showDialog} buttonColor="#FFD7DB">
        Show Dialog
      </Button>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={{ height: '60%' }}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.ScrollArea>
            <ScrollView
              contentContainerStyle={{ marginBottom: 0 }}
              indicatorStyle="black">
              <Text style={{ textAlign: 'left', marginBottom: 0 }}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable.{'\n\n'}The generated Lorem Ipsum is therefore always
                free from repetition, injected humour, or non-characteristic
                words etc. It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancy.{'\n\n'}Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose (injected humour and
                the like).\n Contrary to popular belief, Lorem Ipsum is not
                simply random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source.{'\n\n'}Lorem Ipsum comes from sections
                1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                Extremes of Good and Evil) by Cicero, written in 45 BC. This
                book is a treatise on the theory of ethics, very popular during
                the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
                dolor sit amet..", comes from a line in section 1.10.32.
              </Text>
            </ScrollView>
          </Dialog.ScrollArea>
          <Dialog.Actions
            style={{ marginTop: -22, paddingTop: 8, paddingBottom: 8 }}>
            <Button onPress={hideDialog}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default DialogScrollArea;

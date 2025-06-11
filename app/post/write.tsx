import InputDescription from "@/components/InputDescription";
import InputTitle from "@/components/InputTitle";
import NewButton from "@/components/NewButton";
import useCreatePost from "@/hooks/query/useCreatePost";
import { ImageUri } from "@/types";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type FormValue = {
  title: string;
  description: string;
  imageUris: ImageUri[];
};
const WriteScreen = () => {
  const createPost = useCreatePost();
  const navigation = useNavigation();

  const postForm = useForm<FormValue>({
    defaultValues: {
      title: "",
      description: "",
      imageUris: [],
    },
  });

  const onSubmit = (formValues: FormValue) => {
    createPost.mutate(formValues);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <NewButton
          label="등록"
          size="medium"
          variant="standard"
          onPress={postForm.handleSubmit(onSubmit)}
        />
      ),
    });
  }, []);

  return (
    <FormProvider {...postForm}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <InputTitle />
        <InputDescription />
      </KeyboardAwareScrollView>
    </FormProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 16,
    gap: 16,
  },
});

export default WriteScreen;

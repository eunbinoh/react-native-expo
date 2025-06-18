import InputDescription from "@/components/InputDescription";
import InputTitle from "@/components/InputTitle";
import NewButton from "@/components/NewButton";
import useGetPost from "@/hooks/query/useGetPost";
import useUpdatePost from "@/hooks/query/useUpdatePost";
import { ImageUri } from "@/types";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
type FormValue = {
  title: string;
  description: string;
  imageUris: ImageUri[];
};
export default function EditPostScreen() {
  const { id } = useLocalSearchParams();
  const { data: post } = useGetPost(Number(id));
  const updatePost = useUpdatePost();
  const navigation = useNavigation();
  const postForm = useForm<FormValue>({
    defaultValues: {
      title: post?.title,
      description: post?.description,
      imageUris: post?.imageUris,
    },
    values: {
      title: post?.title as string,
      description: post?.description as string,
      imageUris: post?.imageUris as ImageUri[],
    },
  });

  const onSubmit = (formValues: FormValue) => {
    updatePost.mutate({
      id: Number(id),
      body: formValues,
    });
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
}
const styles = StyleSheet.create({
  container: {
    margin: 16,
    gap: 16,
  },
});

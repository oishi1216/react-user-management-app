import { Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FC, memo} from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
}

export const UserDetailModal: FC<Props> = memo((props) => {
    const { isOpen, onClose } = props;
    return(
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
            <ModalOverlay />
            <ModalContent pb={6}>
                <ModalHeader>ユーザー詳細</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>名前</FormLabel>
                            <Input value="名無し" isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>フルネーム</FormLabel>
                            <Input value="Gonbe Nanashi" isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>MAIL</FormLabel>
                            <Input value="1234@example.com" isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>TEL</FormLabel>
                            <Input value="030-1245-6789" isReadOnly />
                        </FormControl>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
})
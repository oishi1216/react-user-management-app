import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: FC = memo(() => {
    const { getUsers, loading, users } = useAllUsers();
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => getUsers(), []);

    const onClickUser = useCallback(() => onOpen(), []);

    return(
        <>
            { loading ? (
                <Center h="100vh">
                    <Spinner />
                </Center>
            ) : (
                <Wrap p={{ base: 4, md: 10 }} justify="center">
                    {users.map((user) => {
                        return(
                            <WrapItem key={user.id}>
                                <UserCard imageUrl="https://source.unsplash.com/random" userName={user.username} fullName={user.name} onClick={onClickUser}/>
                            </WrapItem>
                        )
                    })}
                </Wrap>
            )}
            <UserDetailModal isOpen={isOpen} onClose={onClose} />
        </>
    )
})
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: FC = memo(() => {
    const { getUsers, loading, users } = useAllUsers();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { onSelectUser, selectedUser } = useSelectUser();
    const { loginUser } = useLoginUser();

    useEffect(() => getUsers(), []);

    const onClickUser = useCallback((id: number) => {
        onSelectUser({ id, users, onOpen });
    }, [ onOpen, users, onSelectUser ]);

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
                                <UserCard imageUrl="https://source.unsplash.com/random" id={user.id} userName={user.username} fullName={user.name} onClick={onClickUser}/>
                            </WrapItem>
                        )
                    })}
                </Wrap>
            )}
            <UserDetailModal user={selectedUser} isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose} />
        </>
    )
})
import { Avatar, Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import { CircleDashed, MagnifyingGlass, ArchiveBox } from 'phosphor-react'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import React from 'react'
import {
    Search,
    SearchIconWrapper,
    StyledInputBase,
} from "../../components/Search";
import { faker } from '@faker-js/faker';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));


const ChatElement = () => {
    return (
        <Box sx={{
            width: "100%",
            height: 60,
            borderRadius: 1,
            backgroundColor: "#fff"
        }}>
            <Stack direction="row" alignItems={"center"} justifyContent="space-between">
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant='dot'
                >

                    <Avatar src={faker.image.avatar()} />
                </StyledBadge>
            </Stack>
        </Box>
    )
}
const Chat = () => {
    return (
        <Box
            sx={{
                position: "relative",
                height: "100%",
                width: 320,
                backgroundColor: "#F8FAFF",
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            }}
        >
            <Stack p={3}>
                <Stack direction="row" alignItems={"center"} justifyContent="space-between">
                    <Typography variant="h5">Chats</Typography>
                    <IconButton>
                        <CircleDashed />
                    </IconButton>
                </Stack>
                <Stack sx={{ width: "100%" }}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color="#709CE6" />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Search>
                </Stack>
                <Stack spacing={2}>
                    <Stack direction={"row"} spacing={1.5} alignItems="center">
                        <ArchiveBox size={24} />
                        <Button variant="text">Archive</Button>
                    </Stack>
                    <Divider />
                </Stack>
                <Stack>
                    <ChatElement />
                </Stack>
            </Stack>
        </Box>
    )
}

export default Chat
import React, { Suspense, lazy, memo, useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { lightblue, matblack } from "../components/constants/color";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "../components/styles/StyledComponent";
import AvatarCard from "../components/shared/AvatarCard";
import { sampleChats } from "../components/constants/SampleData";
import { lightBlue } from "@mui/material/colors";
const ConfirmDeleteDialog =lazy(()=>import("../components/dialogs/ConfirmDeleteDialog"))
const AddMemberDialog =lazy(()=>import("../components/dialogs/AddMemberDialog"))



const Groups = () => {
  const [searchParams] = useSearchParams();
  const chatId = searchParams.get("group");
  console.log(chatId);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setgroupName] = useState("Group Name");
  const [groupNameUpdatedValue, setgroupNameUpdatedValue] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  };
  const updateGroupName = () => {
    setIsEdit(false);
    console.log(groupNameUpdatedValue);
  };
  const openconfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true)
      console.log("Delete group");
  };
  const closeconfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false)
      console.log("Delete group");
  };
  const openAddMemberHandler = () => {
    console.log("Add member");
  };
  const deleteHandler = () => {
    console.log("Delete handler");
  };

  useEffect(() => {
    setgroupName(`Group Name ${chatId}`);
    setgroupNameUpdatedValue(`updated grp name ${chatId}`);
    return () => {
      setIsEdit(false);
    };
  }, [chatId]);

  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/");
  };

  const isAddMember=true;
  
  const IconBtns = (
    <>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Tooltip title="back">
        <IconButton
          onClick={navigateBack}
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matblack,
            color: "white",
            ":hover": { bgcolor: "grey" },
          }}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  const GroupName = (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      padding={"3rem"}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setgroupNameUpdatedValue(e.target.value)}
          />
          <IconButton onClick={updateGroupName}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = () => (
    <Stack
      direction={{
        xs: "column-reverse",
        sm: "row",
      }}
      spacing="1rem"
      p={{
        xs: "0",
        sm: "1rem",
        md: "1rem 4rem",
      }}
    >
      
    <Button onClick={openconfirmDeleteHandler} size="small" color="error" variant="outlined" startIcon={<DeleteIcon/>}>Delete Group</Button>


    <Button onClick={openAddMemberHandler} size="small" variant="contained" startIcon={<AddIcon/>}>Add Member</Button>
    </Stack>
  );






  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{ display: { xs: "none", sm: "block" } }}
        sm={4}
        bgcolor={lightblue}
      >
        <GroupList myGroups={sampleChats} chatId={chatId} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconBtns}

        {GroupName && (
          <>
            {groupName}
            <Typography
              margin={"2rem"}
              alignSelf={"flex-start"}
              variant="body1"
            >
              Members
            </Typography>
            <Stack
  maxWidth={"45rem"}
  width={"100%"}
  boxSizing="border-box"
  padding={{
    sm: "1rem",
    xs: "0",
    md: "1rem 4rem",
  }}
  spacing={"2rem"}
  bgcolor="#2694ab"
  height={"50vh"}
  overflow="auto"
> 
{/* members */}
</Stack>
{ButtonGroup()}
          </>
        )}
      </Grid>

{
  isAddMember && <Suspense fallback={<Backdrop open />}>
<AddMemberDialog/>
  </Suspense>
}

{confirmDeleteDialog && (
  <Suspense fallback={<Backdrop open />}>
    <ConfirmDeleteDialog open={confirmDeleteDialog} handleClose={closeconfirmDeleteHandler} deleteHandler={deleteHandler}/>
  </Suspense>
)}

      <Drawer
        sx={{ display: { xs: "block", sm: "none" } }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        <GroupList width={"50vw"} myGroups={sampleChats} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

const GroupList = ({ myGroups = [], chatId }) => (
  <Stack width="100%">
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography textAlign={"center"} padding={"1rem"}>
        No Groups
      </Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return (
    <Link
      to={`?group=${_id}`}
      // onclick to avoid rerender when same chat is clicked again n again
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        padding="0.5rem"
        spacing={"1rem"}
      >
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;

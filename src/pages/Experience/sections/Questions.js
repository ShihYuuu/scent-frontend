import { useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function Questions() {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  });

  const handleChange = (e) => {
    setAnswers((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <MKBox component="section" py={4}>
      <Container>
        <MKBox mt={6}>
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={6}>
              <MKTypography variant="h4" mb={2}>
                嗨，今天你的感覺如何呢？
              </MKTypography>
              <MKTypography variant="body1">請選擇一個你最想處理的情緒。</MKTypography>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl component="fieldset">
                <RadioGroup name="q1" value={answers.q1} onChange={handleChange}>
                  <FormControlLabel value="anexity" control={<Radio />} label="焦慮/壓力/不安" />
                  <FormControlLabel value="sad" control={<Radio />} label="難過/悲傷/失落" />
                  <FormControlLabel value="relax" control={<Radio />} label="想放鬆、睡得更好" />
                  <FormControlLabel value="power" control={<Radio />} label="想更專注、更有能量" />
                  <FormControlLabel
                    value="happy"
                    control={<Radio />}
                    label="開心，想慶祝這一天！"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </MKBox>

        <MKBox mt={6}>
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={6}>
              <MKTypography variant="h4" mb={2}>
                偏好氣味風格選擇：
              </MKTypography>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl component="fieldset">
                <RadioGroup name="q2" value={answers.q2} onChange={handleChange}>
                  <FormControlLabel value="flavor1" control={<Radio />} label="清新果香" />
                  <FormControlLabel value="flavor2" control={<Radio />} label="柔和花香" />
                  <FormControlLabel value="flavor3" control={<Radio />} label="溫暖木質" />
                  <FormControlLabel value="flavor4" control={<Radio />} label="粉霧感性" />
                  <FormControlLabel value="flavor5" control={<Radio />} label="神秘煙燻" />
                  <FormControlLabel value="flavor6" control={<Radio />} label="療癒美食" />
                  <FormControlLabel value="flavor7" control={<Radio />} label="帥氣皮革" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </MKBox>

        <MKBox mt={6}>
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={6}>
              <MKTypography variant="h4" mb={2}>
                使用情境：
              </MKTypography>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl component="fieldset">
                <RadioGroup name="q3" value={answers.q3} onChange={handleChange}>
                  <FormControlLabel value="situation1" control={<Radio />} label="上學" />
                  <FormControlLabel value="situation2" control={<Radio />} label="上班" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </MKBox>
        <Grid container justifyContent="center" mt={6}>
          <MKButton variant="gradient" color="primary">
            送出
          </MKButton>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Questions;

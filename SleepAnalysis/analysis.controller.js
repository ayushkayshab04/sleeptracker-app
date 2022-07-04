const analysisService = require('./analysis.service');

const generateReport = async (req, res) => {
  try {
    const scheduleId = req.params.id;
    const report = await analysisService.generateReport({ scheduleId });
    res.send(report);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  generateReport,
};

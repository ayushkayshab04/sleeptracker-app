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

const getReportById = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await analysisService.getReportById({ id });
    res.send(report);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = {
  generateReport,
  getReportById,
};

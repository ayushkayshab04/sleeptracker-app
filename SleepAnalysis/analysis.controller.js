const { idValidation } = require('../validation');
const analysisService = require('./analysis.service');

const generateReport = async (req, res) => {
  try {
    const { id } = req.params.id;
    await idValidation.validateAsync({ id });
    const report = await analysisService.generateReport({ id });
    res.send(report);
  } catch (error) {
    throw new Error(error);
  }
};

const getReportById = async (req, res) => {
  try {
    const { id } = req.params;
    await idValidation.validateAsync({ id });
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

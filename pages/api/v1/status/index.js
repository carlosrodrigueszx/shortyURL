function status(request, response) {
  response.status(200).json({ chave: "valor acima da média!" });
}

export default status;

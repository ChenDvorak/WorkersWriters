#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs
WORKDIR /src
COPY ["Web/WorkersWritersWeb.csproj", "Web/"]
COPY ["DB/DB.csproj", "DB/"]
COPY ["Articles/Applications.csproj", "Articles/"]
RUN dotnet restore "Web/WorkersWritersWeb.csproj"
COPY . .
WORKDIR "/src/Web"
RUN dotnet build "WorkersWritersWeb.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "WorkersWritersWeb.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "WorkersWritersWeb.dll"]
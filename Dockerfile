FROM java:8
COPY Autobuild.java .
RUN javac Autobuild.java

CMD ["java", "Autobuild"]
